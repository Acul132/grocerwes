import {Link} from "react-router-dom"
import {AuthContext} from "../Auth"
import {useContext, useState} from "react"
import Avatar from "./Avatar"

const Header = ({isSignedIn=false, handleLogout}) => {
    const {currentUser} = useContext(AuthContext)
    const [selected, setSelected] = useState("")

    const loggedInElements = <>
        <li>
            <a onClick={handleLogout}>Logout</a>
        </li>
        <Avatar/>
    </>

    const isSelected = (pathname) => {
        if(pathname === selected)
            return "selected"
        else
            return ""
    }

    return (
        <nav className="header">
            <div>
                <ul>
                    <li>
                        <Link to="/" className={isSelected("/")} onClick={() => setSelected("/")}>Home</Link>
                    </li>
                    <li>
                        <Link to="/lists" className={isSelected("/lists")} onClick={() => setSelected("/lists")}>Lists</Link>
                    </li>
                    <li>
                        <Link to="/homes" className={isSelected("/homes")} onClick={() => setSelected("/homes")}>Homes</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    {currentUser ? loggedInElements
                        : <li>
                            <Link to="/login">Login</Link>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Header