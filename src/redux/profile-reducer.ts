import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogsActionsType} from "./dialogs-reducer";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ActionsType = DialogsActionsType | ProfileActionsType

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type ProfileActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof UpdateNewPostActionCreator>

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return {...state}
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return {...state}
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export const UpdateNewPostActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}