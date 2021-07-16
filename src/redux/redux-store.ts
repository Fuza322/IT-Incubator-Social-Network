import {createStore, combineReducers} from "redux"
import {profileReducer} from "./profile-reducer"
import {dialogsReducer} from "./dialogs-reducer"
import {usersReducer} from "./users-reducer"
import {authReducer} from "./auth-reducer"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar : sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(rootReducer)
export type RootStateType = ReturnType<typeof rootReducer>

export default store