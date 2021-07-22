import {Dispatch} from "redux"
import {ThunkAction, ThunkDispatch} from "redux-thunk"
import {stopSubmit, FormAction} from "redux-form"
import {authAPI} from "../api/api"
import {RootStateType} from "./redux-store"

export const SET_USER_DATA = "SET_USER_DATA"

export type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
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
       return authAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType | FormAction>) => {

        authAPI.login(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                } else {
                    let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
                    dispatch(stopSubmit("LoginForm", {_error: message}))
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
export type ActionsType =
    ReturnType<typeof setAuthUserData>