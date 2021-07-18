import React from "react"
import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {getAuthUserDataTC} from "../../redux/auth-reducer"
import Header from "./Header"

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    getAuthUserDataTC: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
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

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer)