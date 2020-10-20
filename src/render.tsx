import {RootStateType} from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

export const renderThree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}