import {createStore, combineReducers} from "redux"
import {profileReducer} from "./profile-reducer"
import {dialogsReducer} from "./dialogs-reducer"
import {usersReducer} from "./users-reducer"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar : sidebarReducer
    usersPage: usersReducer
})

let store = createStore(rootReducer)
export type RootStateType = ReturnType<typeof rootReducer>

export default store