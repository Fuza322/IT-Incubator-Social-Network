import {Dispatch} from "redux"
import {authAPI} from "../api/api"
import {RootStateType} from "./redux-store"
import {ThunkAction, ThunkDispatch} from "redux-thunk"

export const SET_USER_DATA = "SET_USER_DATA"

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export const getAuthUserDataTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
        authAPI.login(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                }
            })
    }
}

export const logoutUserTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: SET_USER_DATA, payload: {userId: userId, email: email, login: login, isAuth: isAuth}} as const
}

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionsType>
export type ActionsType = ReturnType<typeof setAuthUserData>