import React from "react"
import axios from "axios"
import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {setAuthUserData} from "../../redux/auth-reducer"
import Header from "./Header"

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => ReturnType<typeof setAuthUserData>
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if(res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)