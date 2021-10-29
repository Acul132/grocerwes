import List from "./components/List/List"
import React from "react";
import LoginPage from "./components/LoginPage"
import MyLists from "./components/MyLists/MyLists"
import Header from "./components/Header"
import {AuthProvider} from "./Auth"
import PrivateRoute from "./PrivateRoute"
import {getAuth} from "firebase/auth"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {ToastContainer} from "react-toastify"

function App() {

  const handleLogout = () => {
    getAuth().signOut()
  }

    return (
      <AuthProvider>
        <Router>
          <div style={{height: "100%", display: "flex", "flexDirection":"column"}}>
            <Header handleLogout={handleLogout}/>
    
            <PrivateRoute exact path="/lists" component={MyLists}/>
            <PrivateRoute exact path="/homes" component={Homes}/>
            <PrivateRoute exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/" component={Home}/>

            <ToastContainer position="bottom-right"/>
          </div>
        </Router>
      </AuthProvider>
      );
  
}

function Home() {
    return (
        <div className="app">
            <List/>
        </div>
      );
  }
  
  function Homes() {
    return <div className="homes-container">
        <h2>Coming soon...</h2>
      </div>;
  }

  function Profile() {
    return <div className="profile-container">
        <h2>Coming soon...</h2>
      </div>;
  }

export default App;
