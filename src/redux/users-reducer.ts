import {Dispatch} from "redux"
import {usersAPI} from "../api/api"

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

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
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

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const followTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollowTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


export const followSuccess = (userId: number) => {
    return {type: FOLLOW, userId: userId} as const
}

export const unfollowSuccess = (userId: number) => {
    return {type: UNFOLLOW, userId: userId} as const
}

export const setUsers = (users: Array<UserType>) => {
    return {type: SET_USERS, users: users} as const
}

export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage} as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount: totalCount} as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching} as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId} as const
}

export type ActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>