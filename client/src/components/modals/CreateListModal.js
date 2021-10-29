import {useState} from "react"
import {IoClose} from "react-icons/io5"
import { toast } from 'react-toastify';

const CreateListModal = ({closeModal, handleNewList}) => {
    const [name, setName] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(name !== ""){
            await handleNewList(name, "")
            closeModal()
        }else{
            toast.error("Name cannot be empty!")
        }
    }

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <IoClose onClick={closeModal}/> 
                <h1>Create List</h1>
                <div className="modal-actions">
                    <input type="text" placeholder="Enter name..." value={name} onChange={(e) => setName(e.target.value)}/>
                    <button>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateListModal