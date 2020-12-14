import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const renderThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderThree()

subscribe(renderThree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
