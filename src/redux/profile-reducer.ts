import {ThunkAction} from "redux-thunk"
import {profileAPI, usersAPI} from "../api/api"
import {AppActionsType, RootStateType} from "./redux-store"

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

const initialState = {
    profile: null,
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11}
    ],
    status: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: AppActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
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

export const getUserProfileTC = (userId: number): ThunkAction<void, RootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            const res = await usersAPI.getProfile(userId)
            dispatch(setUserProfileAC(res.data))
        } catch (error) {
            console.log(error)
        }
    }

export const getUserStatusTC = (userId: number): ThunkAction<void, RootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            const res = await profileAPI.getStatus(userId)
            dispatch(setUserStatusAC(res.data))
        } catch (error) {
            console.log(error)
        }
    }

export const updateUserStatusTC = (status: string): ThunkAction<void, RootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            const res = await profileAPI.updateStatus(status)
            if (res.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        } catch (error) {
            console.log(error)
        }
    }

export const addPostAC = (newPostText: string) => (
    {type: ADD_POST, newPostText: newPostText} as const)

export const setUserProfileAC = (profile: ProfileType) => (
    {type: SET_USER_PROFILE, profile: profile} as const)

export const setUserStatusAC = (status: string) => (
    {type: SET_USER_STATUS, status: status} as const)

export type ProfileActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof setUserProfileAC>