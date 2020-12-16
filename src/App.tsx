import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {StoreType, ActionsType,} from './redux/state'

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

function App(props: AppPropsType) {

    const  state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route /*exact*/ path='/dialogs' render={ () =>
                        <Dialogs
                            dialogs={state.dialogsPage.dialogs}
                            newMessageText={state.dialogsPage.newMessageText}
                            messages={state.dialogsPage.messages}
                            dispatch={props.dispatch}
                        />
                    }/>
                    <Route path='/profile' render={ () =>
                        <Profile
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                            dispatch={props.dispatch}
                        /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
