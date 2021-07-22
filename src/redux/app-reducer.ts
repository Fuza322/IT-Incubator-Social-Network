import {ThunkDispatch} from "redux-thunk"
import {RootStateType} from "./redux-store"
import {getAuthUserDataTC} from "./auth-reducer"

const SET_INITIALIZED_SUCCESS = "SET-INITIALIZED-SUCCESS"

export type AppStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS: {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

export const initializeAppTC = () => {
    return (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
        let promise = dispatch(getAuthUserDataTC())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccessAC())
            })
    }
}

export const initializedSuccessAC = () => {
    return {type: SET_INITIALIZED_SUCCESS} as const
}

type ActionsType = ReturnType<typeof initializedSuccessAC>