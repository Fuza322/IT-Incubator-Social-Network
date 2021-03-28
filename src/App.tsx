import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {ActionsType,} from './redux/store'
import {RootReduxStateType} from "./redux/redux-store";

type AppPropsType = {
    state: RootReduxStateType
    dispatch: (action: ActionsType) => void
}

function App(props: AppPropsType) {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs
                        dialogs={props.state.dialogsPage.dialogs}
                        newMessageText={props.state.dialogsPage.newMessageText}
                        messages={props.state.dialogsPage.messages}
                        dispatch={props.dispatch}
                    />
                }/>
                <Route path='/profile' render={() =>
                    <Profile
                        posts={props.state.profilePage.posts}
                        newPostText={props.state.profilePage.newPostText}
                        dispatch={props.dispatch}
                    />
                }/>
            </div>
        </div>
    );
}

export default App;
