import {createStore, combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar : sidebarReducer
})

export type RootReduxStateType = ReturnType<typeof redusers>

let store = createStore(redusers)

export default store