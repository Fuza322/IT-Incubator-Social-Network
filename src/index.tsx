import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import store from './redux/state'

export const renderThree = () => {
    ReactDOM.render(
            <App store={store} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}

renderThree()
store.subscribe(renderThree)
