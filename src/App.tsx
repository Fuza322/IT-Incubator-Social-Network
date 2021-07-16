import React from "react"
import {Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import UsersContainer from "./components/Users/UsersContainer"
import "./App.css"

type AppPropsType = {

}

function App(props: AppPropsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() =>
                    <DialogsContainer/>
                }/>
                <Route path="/profile/:userId?" render={() =>
                    <ProfileContainer/>
                }/>
                <Route path="/users" render={() =>
                    <UsersContainer/>
                }/>
            </div>
        </div>
    )
}

export default App
