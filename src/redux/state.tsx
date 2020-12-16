const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

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

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
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

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 5,
                message: action.newText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber()

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()

        } else if (action.type === SEND_MESSAGE) {
            let newText = this._state.dialogsPage.newMessageText = action.newText
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messages.push({id: 6, message: newText})
            this._callSubscriber()
        }
    }
}

export type ActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof UpdateNewPostActionCreator>
    | ReturnType<typeof SendMessageActionCreator>
    | ReturnType<typeof UpdateNewMessageTextActionCreator>

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