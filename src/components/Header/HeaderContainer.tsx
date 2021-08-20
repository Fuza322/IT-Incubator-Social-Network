import React from "react"
import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {logoutUserTC} from "../../redux/auth-reducer"
import {Header} from "./Header"

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    logoutUser: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logoutUser={this.props.logoutUser}
            />
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logoutUser: logoutUserTC})(HeaderContainer)