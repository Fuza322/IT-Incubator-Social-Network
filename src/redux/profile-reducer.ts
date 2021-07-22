import {Dispatch} from "redux"
import {profileAPI, usersAPI} from "../api/api"
import {DialogsActionsType} from "./dialogs-reducer"

export const ADD_POST = "ADD-POST"
export const SET_USER_PROFILE = "SET_USER_PROFILE"
export const SET_USER_STATUS = "SET_USER_STATUS"

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
    status: string
}

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11}
    ],
    status: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const getUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId)
            .then(res => {
                dispatch(setUserProfileAC(res.data))
            })
    }
}

export const getUserStatusTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(res => {
                dispatch(setUserStatusAC(res.data))
            })
    }
}

export const updateUserStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(res => {
                if(res.data.resultCode === 0) {
                    dispatch(setUserStatusAC(status))
                }
            })
    }
}

export const addPostAC = (newPostText: string) => {
    return {type: ADD_POST, newPostText: newPostText} as const
}

export const setUserProfileAC = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile: profile} as const
}

export const setUserStatusAC = (status: string) => {
    return {type: SET_USER_STATUS, status: status} as const
}

export type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof setUserProfileAC>
export type ActionsType = DialogsActionsType | ProfileActionsType