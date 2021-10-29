import React, {useState} from "react"
import {BsPlusSquareFill} from "react-icons/bs"

const ListForm = ({addListItem, list}) => {
    const [itemName, setItemName] = useState("")
    const [listName, setListName] = useState(list.id === "1" ? "Quick List" : list.name)

    const handleChange = (e) => {
        setItemName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addListItem(itemName)
        setItemName("")
    }

    return (
        <div className="list-form-container">
            {listName}
            <form onSubmit={onSubmit} className="list-form">
                <input
                    type="text"
                    value={itemName}
                    onChange={handleChange}
                    placeholder="Name of item">
                </input>
                <BsPlusSquareFill onClick={onSubmit}/>
            </form>
        </div>
    )
}

export default ListForm