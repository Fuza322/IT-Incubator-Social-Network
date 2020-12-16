import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import store from './redux/state'

export const renderThree = () => {
    ReactDOM.render(
            <App
                store={store}
                dispatch={store.dispatch.bind(store)}
            />,
        document.getElementById('root')
    );
}

renderThree()
store.subscribe(renderThree)
