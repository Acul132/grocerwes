const express = require("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 3001
const { nanoid } = require('nanoid')
const cors = require("cors")
const verifyUser = require("./middleware/verifyUser")
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
let serviceAccount

if (process.env.NODE_ENV === 'production'){
    serviceAccount = {
        "type": "service_account",
        "project_id": "grocerwes",
        "private_key_id": process.env.private_key_id,
        "private_key": process.env.private_key.replace(/\\n/g, '\n'),
        "client_email": process.env.client_email,
        "client_id": process.env.client_id,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5e1kn%40grocerwes.iam.gserviceaccount.com"
      }
} else {
    serviceAccount = require('./grocerwes-firebase-adminsdk-5e1kn-52ef31879f.json');
}

initializeApp({
    credential: cert(serviceAccount)
});

app.use(cors())
app.use(express.json())

const db = getFirestore();

//Serve Static App
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.get("/api/lists", verifyUser, async (req, res) => {
    const userId = req.user.uid
    const listsRef = db.collection("lists")
    const snapshot = await listsRef.where("user", "==", userId).get()
    
    const results = []
    snapshot.forEach(doc => {
        results.push(doc.data())
    })
    res.status(200).json({lists:results})
})

app.post("/api/lists", verifyUser, async (req, res) => {
    const name = req.body.name
    const importedListId = req.body.listId
    const listsRef = db.collection('lists')


    const listId = nanoid(15)
    const data = {
        "id": listId,
        "user": req.user.uid
    }

    if(name !== ""){
        data.name = name
        data.rows = []
    }else {
        const importedList = await listsRef.doc(importedListId).get()
        if(!importedList.exists){
            return res.status(404).json({"errorText":"List ID not found"})
        }
        data.name = importedList.data().name
        data.rows = importedList.data().rows
    }

    await listsRef.doc(listId).set(data);
    const doc = await listsRef.doc(listId).get()
    res.status(200).json({list: doc.data()})
})

app.put("/api/lists/:id", verifyUser, async (req, res) => {
    const userId = req.user.uid
    const listId = req.params.id
    const listRef = db.collection('lists').doc(listId)

    const listDoc = await listRef.get()
    if(listDoc.exists){
        if(listDoc.data().user !== userId)
            return res.status(403).json({"errorText": "Cannot edit another users list!"})
        
        if(req.body.rows)
            await listRef.update({rows: req.body.rows})
        else if(req.body.name)
            await listRef.update({name: req.body.name})
    }else{
        return res.status(404).json({"errorText": "List not found!"})
    }

    

    res.status(200).send("Successfully update list")
})

app.delete("/api/lists/:id", verifyUser, async (req, res) => {
    const userId = req.user.uid
    const listId = req.params.id
    const listRef = db.collection('lists').doc(listId)

    const listDoc = await listRef.get()
    if(!listDoc.exists){
        console.log("error?")
        console.log(listId)
        return res.status(404).json({"errorText": "List not found!"})
    }
    
    await listRef.delete()

    return res.status(200).send("Succesfully deleted list")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
