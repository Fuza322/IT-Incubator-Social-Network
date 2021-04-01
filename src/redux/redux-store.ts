import {createStore, combineReducers} from "redux";
import {ProfilePageType, profileReducer} from "./profile-reducer";
import {DialogPageType, dialogsReducer} from "./dialogs-reducer";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    /*sideBar: SideBar*/
}

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar : sidebarReducer
})

export type RootReduxStateType = ReturnType<typeof redusers>

let store = createStore(redusers)

export default store