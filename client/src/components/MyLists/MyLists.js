import {useState, useEffect, useRef} from "react"
import {useSelector} from "react-redux"
import {FaSpinner} from "react-icons/fa"
import axios from "axios"
import CreateListModal from "../modals/CreateListModal"
import ImportListModal from "../modals/ImportListModal"
import MyListRow from "./MyListRow"
import { toast } from 'react-toastify';
import List from "../List/List"
import url from "../../config/url"

const useIsMounted = () => {
    const isMounted = useRef(false)
    useEffect(() => {
        isMounted.current = true
        return () => {
           isMounted.current = false 
        }
    }, [])
    return isMounted
}


const MyLists = () => {
    const [lists, setLists] = useState([])
    const [selectedList, setSelectedList] = useState({})
    const [isListOpen, setIsListOpen] = useState(false)
    const [isListCreationOpen, setIsListCreationOpen] = useState(false)
    const [isLoading, setIsloading] = useState(false)
    const [isImportListOpen, setIsImportListOpen] = useState(false)
    const currentUser = useSelector((state) => state.user)
    const isMounted = useIsMounted()

    const handleToggleSelectedList = (list) => {
        if(isListOpen){
            setIsListOpen(false)
            setSelectedList({})
        }else{
            setSelectedList(list)
            setIsListOpen(true)
        }
    }

    const handleNewList = async (name="", listId="") => {
        try{
            const res = await axios({
                method: "POST",
                url: `${url}api/lists`,
                headers: {
                    Authorization: "Bearer " + currentUser.accessToken
                },
                data: {
                    name: name,
                    listId: listId
                }
            })
            if(res.data.list)
                setLists([...lists, res.data.list])
        }catch(error){
            toast.error(error.response.data.errorText)
        }
        setIsListCreationOpen(false)
    }

    const handleListNameChange = async (id, newName) => {
        try{
            const res = await axios({
                method: "PUT",
                url: `${url}api/lists/${id}`,
                headers: {
                    Authorization: "Bearer " + currentUser.accessToken
                },
                data: {
                    name: newName
                }
            })
            if(res.status === 200 && isMounted.current) {
                setLists([...lists.map((list) => {
                    if(list.id === id) {
                        list.name = newName
                    }
                    return list
                })])
            }
               
        }catch(error){
            toast.error(error.response.data.errorText)
        }
    }

    const handleListDelete = async (id) => {
        try{
            await axios({
                method: "DELETE",
                url: `${url}api/lists/${id}`,
                headers: {
                    Authorization: "Bearer " + currentUser.accessToken
                }
            })
            if(isMounted.current) setLists(lists.filter(list => list.id !== id))
        }catch(error){
            toast.error(error.response.data.errorText)
        }
    }

    const toggleListCreationOpen = () => {
        setIsListCreationOpen(!isListCreationOpen)
    }

    const toggleImportListOpen = () => {
        setIsImportListOpen(!isImportListOpen)
    }

    const fetchLists = async () => {
        try{
            setIsloading(true)
            const res = await axios.get(`${url}api/lists`, {
                headers: {
                    Authorization: "Bearer " + currentUser.accessToken
                }
            })

            if(res.data.lists && isMounted.current) {
                setIsloading(false)
                setLists([...res.data.lists])
            }
        }catch(e){
            console.log(e)
        }
    }

    const handleCloseList = () => {
        setIsListOpen(false)
        fetchLists()
    }

    useEffect(() => {
        fetchLists()
    }, [])

    

    

    return (
        <div className="my-lists-container">
            {isListCreationOpen && <CreateListModal closeModal={toggleListCreationOpen} handleNewList={handleNewList}/>}
            {isImportListOpen && <ImportListModal closeModal={toggleImportListOpen} handleNewList={handleNewList}/>}
            {
                isListOpen ? <List list={selectedList} closeList={handleCloseList}/> 
                :   <>
                        <div className="button-container">
                            <button onClick={toggleListCreationOpen}>Add new</button>
                            <button onClick={toggleImportListOpen}>Import</button>
                        </div>
                        <ul className="lists-container">
                            {isLoading && <FaSpinner className={"loading"}/>}
                            {
                                !isLoading && lists.map(list => {
                                    return(
                                        <li className="list-row" onClick={() => handleToggleSelectedList(list)} key={list.id}>
                                        <MyListRow 
                                            id={list.id} 
                                            name={list.name} 
                                            listLength={list.rows.length} 
                                            handleNameChange={handleListNameChange} 
                                            handleDelete={handleListDelete}
                                        />
                                        </li>
                                        
                                    )
                                })
                            }
                        </ul>
                    </>
            }
        </div>
    )
}

export default MyLists