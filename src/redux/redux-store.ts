import {createStore, combineReducers, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {profileReducer} from "./profile-reducer"
import {dialogsReducer} from "./dialogs-reducer"
import {usersReducer} from "./users-reducer"
import {authReducer} from "./auth-reducer"
import {appReducer} from "./app-reducer"

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar : sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof rootReducer>

export default store