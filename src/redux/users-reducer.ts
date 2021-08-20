import {ThunkAction} from "redux-thunk"
import {usersAPI} from "../api/api"
import {AppActionsType, RootStateType} from "./redux-store"

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
}

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: AppActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        } else {
                            return u
                        }
                    }
                )
            }
        }
        case UNFOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        } else {
                            return u
                        }
                    }
                )
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const getUsersTC = (currentPage: number, pageSize: number): ThunkAction<void, RootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setCurrentPageAC(currentPage))
            dispatch(toggleIsFetchingAC(true))
            const res = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(res.items))
            dispatch(setTotalUsersCountAC(res.totalCount))
        } catch (error) {
            console.log(error)
        }
    }

export const followTC = (userId: number): ThunkAction<void, RootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(toggleFollowingProgressAC(true, userId))
            const res = await usersAPI.follow(userId)
            if (res.data.resultCode === 0) {
                dispatch(followSuccessAC(userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId))
        } catch (error) {
            console.log(error)
        }
    }

export const unfollowTC = (userId: number): ThunkAction<void, RootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(toggleFollowingProgressAC(true, userId))
            const res = await usersAPI.unfollow(userId)
            if (res.data.resultCode === 0) {
                dispatch(unfollowSuccessAC(userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId))

        } catch (error) {
            console.log(error)
        }
    }

export const followSuccessAC = (userId: number) => (
    {type: FOLLOW, userId: userId} as const)

export const unfollowSuccessAC = (userId: number) => (
    {type: UNFOLLOW, userId: userId} as const)

export const setUsersAC = (users: Array<UserType>) => (
    {type: SET_USERS, users: users} as const)

export const setCurrentPageAC = (currentPage: number) => (
    {type: SET_CURRENT_PAGE, currentPage: currentPage} as const)

export const setTotalUsersCountAC = (totalCount: number) => (
    {type: SET_TOTAL_USERS_COUNT, totalCount: totalCount} as const)

export const toggleIsFetchingAC = (isFetching: boolean) => (
    {type: TOGGLE_IS_FETCHING, isFetching: isFetching} as const)

export const toggleFollowingProgressAC = (isFetching: boolean, userId: number) => (
    {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId} as const)

export type UsersReducerActionsType =
    ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unfollowSuccessAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>