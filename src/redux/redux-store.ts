import {createStore, combineReducers, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
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

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof rootReducer>

export default store