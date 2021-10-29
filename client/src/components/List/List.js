import React, {useState, useEffect, useContext} from "react"
import ListRow from "./ListRow"
import ListForm from "./ListForm"
import {v4 as uuidv4} from "uuid"
import {toast} from "react-toastify"
import {BiArrowBack} from 'react-icons/bi'
import {AuthContext} from "../../Auth"
import axios from "axios"
import url from "../../config/url"

const List = ({closeList, list = {id:"1",rows:[]}}) => {
    //{id, value, completed}
    const [listItems, setListItems] = useState(list.rows || [])
    const {currentUser} = useContext(AuthContext)
    const isHomeList = (list.id === "1") ? true : false

    useEffect(() => {
        if(isHomeList){
            const quickListItems = JSON.parse(localStorage.getItem("quick-list-items"))
            if(quickListItems)
                setListItems(quickListItems)
        }
    }, [])

    useEffect(() => {
        (async () => {
            if(isHomeList){
                localStorage.setItem("quick-list-items", JSON.stringify(listItems))
            } else{
                try{
                    await axios({
                        method: "PUT",
                        url: `${url}api/lists/${list.id}`,
                        headers: {
                            Authorization: "Bearer " + currentUser.accessToken
                        },
                        data: {
                            rows: listItems
                        }
                    })
                }catch(error){
                    toast.error(error.response.data.errorText)
                }
            }
        })()
    }, [listItems])

    const addListItem = (value) => {
        if(value.trim()){
            setListItems([...listItems, {value: value, id: uuidv4(), completed: false}])
        }else{
            toast.error("List item cannot be empty!")
        }
    }

    const removeListItem = (id) => {
        setListItems(listItems.filter(listItem => listItem.id !== id))
        if(!isHomeList){

        }
    }

    const updateListItem = (id, value) => {
        const prevListItems = [...listItems]
        setListItems(prevListItems.map(item => {
            if(item.id === id)
                item.value = value
            return item
        }))
    }

    const toggleCompleted = (id) => {
        const prevListItems = [...listItems]
        setListItems(prevListItems.map(item => {
            if(item.id === id)
                item.completed = !item.completed
            return item
        }))
    }

    const goBack = () => {
        if(closeList) closeList()
    }

    return (
        <div className="list-container">
            {!isHomeList && <div className={"back-button"} onClick={goBack}><BiArrowBack/></div>}
            <ListForm list={list} addListItem={addListItem}/>
            {
                listItems.length > 0 && 
                <ul className="list-items">
                    {
                        listItems.map(({value, id, completed}) => {
                            return (<li key={id}><ListRow id={id} value={value} completed={completed} 
                            toggleCompleted={toggleCompleted}
                            removeListItem={removeListItem}
                            updateListItem={updateListItem}/></li>)
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default List