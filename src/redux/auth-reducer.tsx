import {ThunkAction} from "redux-thunk"
import {stopSubmit} from "redux-form"
import {authAPI} from "../api/api"
import {AppActionsType, RootStateType} from "./redux-store"

export const SET_USER_DATA = "SET_USER_DATA"

export type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: AppActionsType): AuthStateType => {
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

export const getAuthUserDataTC = (): ThunkAction<void, RootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        const res = await authAPI.me()
        if (res.data.resultCode === 0) {
            const {id, email, login} = res.data.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
        return res
    }

export const loginUserTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, RootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            const res = await authAPI.login(email, password, rememberMe)
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
                dispatch(stopSubmit("LoginForm", {_error: message}))
            }
        } catch (error) {
            console.log(error)
        }
    }

export const logoutUserTC = (): ThunkAction<void, RootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            const res = await authAPI.logout()
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        } catch (error) {
            console.log(error)
        }
    }

export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => (
    {type: SET_USER_DATA, payload: {userId: userId, email: email, login: login, isAuth: isAuth}} as const)

export type AuthReducerActionsType = ReturnType<typeof setAuthUserDataAC>