import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {ActionsType,} from './redux/store'
import {RootReduxStateType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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
                    <DialogsContainer
                        state={props.state}
                        dispatch={props.dispatch}
                    />
                }/>
                <Route path='/profile' render={() =>
                    <Profile
                        state={props.state}
                        dispatch={props.dispatch}
                    />
                }/>
            </div>
        </div>
    );
}

export default App;
