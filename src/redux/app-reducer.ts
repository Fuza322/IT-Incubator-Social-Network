import {ThunkAction} from "redux-thunk"
import {RootStateType, AppActionsType} from "./redux-store"
import {getAuthUserDataTC} from "./auth-reducer"

const SET_INITIALIZED_SUCCESS = "SET-INITIALIZED-SUCCESS"

export type AppStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS: {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

export const initializeAppTC = (): ThunkAction<void, RootStateType, unknown, AppActionsType> =>
    (dispatch) => {
        const promise = dispatch(getAuthUserDataTC())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccessAC())
            })
    }

export const initializedSuccessAC = () => (
    {type: SET_INITIALIZED_SUCCESS} as const)

export type AppReducerActionsType = ReturnType<typeof initializedSuccessAC>