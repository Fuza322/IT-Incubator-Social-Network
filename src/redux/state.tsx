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

export type MyPostsType = {
    posts: Array<PostType>
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

/*type SideBar = {}*/

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    /*sideBar: SideBar*/
}

let state: RootStateType = {
    profilePage: {
    posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 11}
        ]
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
        ]
    },
    /*sidebar: {}*/
}

export default state;