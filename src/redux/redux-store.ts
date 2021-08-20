import {createStore, combineReducers, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {ProfileActionsType, profileReducer} from "./profile-reducer"
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer"
import {usersReducer, UsersReducerActionsType} from "./users-reducer"
import {authReducer, AuthReducerActionsType} from "./auth-reducer"
import {appReducer, AppReducerActionsType} from "./app-reducer"

const rootReducer = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof rootReducer>

export type AppActionsType = AppReducerActionsType
    | AuthReducerActionsType
    | DialogsActionsType
    | ProfileActionsType
    | UsersReducerActionsType

export default store