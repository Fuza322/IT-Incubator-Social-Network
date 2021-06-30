import {createStore, combineReducers} from "redux"
import {profileReducer} from "./profile-reducer"
import {dialogsReducer} from "./dialogs-reducer"

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar : sidebarReducer
})

let store = createStore(redusers)
export type RootStateType = ReturnType<typeof redusers>

export default store