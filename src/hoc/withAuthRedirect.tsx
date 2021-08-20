import React, {ComponentType} from "react"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {RootStateType} from "../redux/redux-store"

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsType) {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to="/login"/>
        }
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
