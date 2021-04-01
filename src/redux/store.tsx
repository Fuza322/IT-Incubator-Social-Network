import {
    ProfilePageType,
    ProfileActionsType,
    profileReducer,
    ADD_POST,
    UPDATE_NEW_POST_TEXT
} from "./profile-reducer";

import {
    DialogPageType,
    DialogsActionsType,
    dialogsReducer,
    SEND_MESSAGE,
    UPDATE_NEW_MESSAGE_TEXT
} from "./dialogs-reducer";

// import sidebarReducer from "./sidebarReducer";

/*type SideBar = {}*

// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 12},
//                 {id: 2, message: 'It is my first post', likesCount: 11}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Victor'},
//                 {id: 6, name: 'Valera'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your it-kamasutra?'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'Yo'},
//                 {id: 6, message: 'Yo'}
//             ],
//             newMessageText: ''
//         },
//         /*sidebar: {}*/
//     },
//     _callSubscriber() {
//         console.log('State was changed')
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action: ActionsType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         //this._state.sidebar = sidebarReducer(this._state.dialogsPage, action)
//
//         this._callSubscriber()
//     }
// }