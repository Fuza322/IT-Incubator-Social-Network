import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

const renderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireThree()

store.subscribe(() => {
        renderEntireThree()
    }
)


// renderEntireThree(store.getState())
//
// store.subscribe(() => {
//         let state = store.getState()
//         renderEntireThree(state)
//     }
// )



