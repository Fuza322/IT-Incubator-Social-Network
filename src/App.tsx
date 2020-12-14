import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from './redux/state'

export type AppPropsType = {
    appState: RootStateType
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route /*exact*/ path='/dialogs' render={ () =>
                        <Dialogs
                            dialogs={props.appState.dialogsPage.dialogs}
                            messages={props.appState.dialogsPage.messages}
                        />
                    }/>
                    <Route path='/profile' render={ () =>
                        <Profile
                            posts={props.appState.profilePage.posts}
                            newPostText={props.appState.profilePage.newPostText}
                        /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
