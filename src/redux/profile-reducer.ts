import {DialogsActionsType} from "./dialogs-reducer"

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
export const SET_USER_PROFILE = "SET_USER_PROFILE"

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    profile: ProfileType | null
    posts: Array<PostType>
    newPostText: string
}

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11}
    ],
    newPostText: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostAC = () => {
    return {type: ADD_POST} as const
}

export const updateNewPostAC = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText} as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile: profile} as const
}

export type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof setUserProfile>
export type ActionsType = DialogsActionsType | ProfileActionsType