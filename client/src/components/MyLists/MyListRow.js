import {useState} from "react"
import {BsTrash, BsFillCheckCircleFill} from "react-icons/bs"
import {FiEdit, FiShare} from "react-icons/fi"
import {toast} from "react-toastify"


const MyListRow = ({id, name, listLength, handleNameChange, handleDelete}) => {
    const [editedValue, setEditedValue] = useState(name)
    const [isEditing, setIsEditing] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    const toggleEditing = (e) => {
        e.stopPropagation()
        if(isEditing && name !== editedValue)
            handleNameChange(id, editedValue)
        setIsEditing(!isEditing)
    }

    const handleIdCopy = (e) => {
        e.stopPropagation()
        navigator.clipboard.writeText(id).then(() => {})
        toast.success("List ID copied to the clipboard!")
    }

    const onClickDelete = (e) => {
        e.stopPropagation()
        setIsDeleting(true); 
        if(!isDeleting) {
            handleDelete(id)
        }
    }

    return (
        <div className="my-list-row-container">
            <div>
                {isEditing ? <input type="text" value={editedValue} 
                onChange={(e) => setEditedValue(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                />
                : <>{name} <span className="list-length">({listLength})</span></>
                }
                
            </div>
            <div className="action-buttons">
                <FiShare onClick={(e) => handleIdCopy(e)}/>
                <BsTrash onClick={onClickDelete}/>
                { isEditing ? <BsFillCheckCircleFill onClick={(e) => toggleEditing(e)}/>
                            : <FiEdit onClick={(e) => toggleEditing(e)}/>}
            </div>
        </div>
    )
}

export default MyListRow