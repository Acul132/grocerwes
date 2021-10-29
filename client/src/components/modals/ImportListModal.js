import {useState} from "react"
import {IoClose} from "react-icons/io5"
import { toast } from 'react-toastify';

const ImportListModal = ({closeModal, handleNewList}) => {
    const [listId, setListId] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(listId !== ""){
            await handleNewList("", listId)
            closeModal()
        }else{
            toast.error("List ID cannot be empty!")
        }
    }

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <h1>Import List</h1>
                <div className="modal-actions">
                    <input type="text" placeholder="Enter list ID..." value={listId} onChange={(e) => setListId(e.target.value)}/>
                    <button>Import</button>
                </div>
                <IoClose onClick={closeModal}/>
            </form>
        </div>
    )
}

export default ImportListModal