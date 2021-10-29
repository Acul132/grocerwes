const admin = require("firebase-admin")

const verifyUser = async (req,res,next) => {
    let token = ""
    if(req.headers && req.headers.authorization)
        token = req.headers.authorization.split(' ')[1]
    try{
        const decodedValue = await admin.auth().verifyIdToken(token)
        if(decodedValue){
            req.user = decodedValue
            return next()
        }
        return res.json({message: "Unauthorized Access"})
    }catch (e){
        console.log(e)
        return res.json({message: "Internal Server Error"})
    }
}

module.exports = verifyUser