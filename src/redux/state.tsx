import profileReducer, {ProfilePageType, ProfileActionsType, UPDATE_NEW_POST_TEXT, ADD_POST} from "./profileReducer";
import dialogsReducer, {DialogPageType, DialogsActionsType, SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer";

export type MessageType = {
    id: number
    message: string
}

export type DialogItemType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

/*type SideBar = {}*/

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    /*sideBar: SideBar*/
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType = DialogsActionsType | ProfileActionsType

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageText: ''
        },
        /*sidebar: {}*/
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        //this._state.sidebar = sidebarReducer(this._state.dialogsPage, action)

        this._callSubscriber()
    }
}

export const addPostActionCreator = (newText: string) => {
    return {
        type: ADD_POST,
        newText: newText
    } as const
}

export const UpdateNewPostActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export const SendMessageActionCreator = (newText: string) => {
    return {
        type: SEND_MESSAGE,
        newText: newText
    } as const
}

export const UpdateNewMessageTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    } as const
}

export default store;