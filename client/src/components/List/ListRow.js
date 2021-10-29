import React, {useState} from "react"
import {ImCheckboxChecked, ImCheckboxUnchecked} from "react-icons/im"
import {BsTrash, BsFillCheckCircleFill} from "react-icons/bs"
import {FiEdit} from "react-icons/fi"

const ListRow = ({id, value, completed, toggleCompleted, removeListItem, updateListItem}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedValue, setEditedValue] = useState(value)

    const isCompleted = completed ? "completed" : ""
    const checkbox = isCompleted ? <ImCheckboxChecked className="list-row-checkmark" onClick={() => toggleCompleted(id)}/>
                                 : <ImCheckboxUnchecked className="list-row-checkmark" onClick={() => toggleCompleted(id)}/>

    const toggleEditing = () => {
        if(isEditing && value !== editedValue)
            updateListItem(id, editedValue)
        setIsEditing(!isEditing)
    }

    const handleEditedValueUpdate = (e) => {
        setEditedValue(e.target.value)
    }

    return (
        <div className="list-row-container">
            <div>
                {checkbox}
                { isEditing ? <input type="text" value={editedValue} onChange={handleEditedValueUpdate}/>
                            : value}
            </div>
            <div className="list-row-options">
                <BsTrash onClick={() => removeListItem(id)}/>
                { isEditing ? <BsFillCheckCircleFill onClick={() => toggleEditing()}/>
                            : <FiEdit onClick={() => toggleEditing()}/>}
            </div>
        </div>
    )
}

export default ListRow