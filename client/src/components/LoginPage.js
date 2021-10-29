import {useState, useContext} from "react"
import {AuthContext} from "../Auth"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {Redirect} from "react-router-dom"
import {FcGoogle} from "react-icons/fc"

const LoginPage = ({history}) => {
    const currentUser = useContext(AuthContext)
    
    const handleGoogleLogin = () => {
        const auth = getAuth()
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            history.push("/")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
        });
    }

    if(currentUser) {
        //return <Redirect to="/" />
    }

    return (
        <div className="login-page">
            <h1>Log in with Google</h1>
            <FcGoogle onClick={handleGoogleLogin}>Login with google</FcGoogle>
        </div>
    )
}

export default LoginPage