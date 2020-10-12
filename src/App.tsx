import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {PostType} from './components/Profile/MyPosts/Post/Post';
import {DialogItemType} from './components/Dialogs/DialogItem/DialogItem';
import {MessageType} from './components/Dialogs/Message/Message';
import state, {RootStateType} from './redux/state'

export type AppPropsType = {
    appState: RootStateType
    /*posts: Array<PostType>
    dialogItems: Array<DialogItemType>
    messages: Array<MessageType>*/
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route /*exact*/ path='/dialogs' render={ () => <Dialogs dialogItems={props.appState.dialogItems} messages={props.appState.messages}/> }/>
                    <Route path='/profile' render={ () => <Profile posts={props.appState.posts}/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
