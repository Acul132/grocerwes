import {useContext} from "react"
import {AuthContext} from "../Auth"
import {Link} from "react-router-dom"

const Avatar = () => {
    const {currentUser} = useContext(AuthContext)

    const avatarName = (displayName) => {
        console.log(currentUser)
        const splitName = displayName.split(" ")
        if(splitName.length >= 2)
            return splitName[0].charAt(0)+splitName[1].charAt(0)
        else
            return splitName[0].charAt(0)
    }

    return (
        <div className="avatar">
            {currentUser && 
                <Link to="/profile">{avatarName(currentUser.displayName)}</Link>
            }
        </div>
    )
}

export default Avatar