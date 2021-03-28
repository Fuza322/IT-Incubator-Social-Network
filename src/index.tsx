import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import store, {RootReduxStateType} from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";


const renderEntireThree = (state: RootReduxStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireThree(store.getState())

store.subscribe(() => {
        let state = store.getState()
        renderEntireThree(state)
    }
)



