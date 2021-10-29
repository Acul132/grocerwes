import React, {useEffect, useState} from "react"
import {getAuth} from "firebase/auth"

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [pending, setPending] = useState(true)

    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged((user) => {
            console.log(user)
            setCurrentUser(user)
            setPending(false)
        })
    }, [])

    if(pending){
        return <h1>Loading...</h1>
    }

    return (
        <AuthContext.Provider
            value={{currentUser}}
        >
            {children}    
        </AuthContext.Provider>
    )
}