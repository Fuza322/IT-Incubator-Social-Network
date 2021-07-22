import React from "react"
import {Route, withRouter} from "react-router-dom"
import {compose} from "redux"
import {connect} from "react-redux"
import {RootStateType} from "./redux/redux-store"
import {initializeAppTC} from "./redux/app-reducer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Navbar from "./components/Navbar/Navbar"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import UsersContainer from "./components/Users/UsersContainer"
import Login from "./components/Login/Login"
import {Preloader} from "./components/common/Preloader/Preloader"
import "./App.css"

type AppPropsType = MapStateToPropsPropsType & MapDispatchToPropsType

type MapStateToPropsPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
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
                    <Route path="/login" render={() =>
                        <Login/>
                    }/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp: initializeAppTC}))(App)