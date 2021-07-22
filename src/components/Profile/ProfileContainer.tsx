import React from "react"
import {withRouter, RouteComponentProps} from "react-router-dom"
import {compose} from "redux"
import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {ProfileType, getUserProfileTC, getUserStatusTC, updateUserStatusTC} from "../../redux/profile-reducer"
import Profile from "./Profile"

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfileTC: (userId: number) => void
    getUserStatusTC: (userId: number) => void
    updateUserStatusTC: (status: string) => void
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId  = Number(this.props.authorizedUserId)
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    render() {
        return (
            <div>
                {this.props.profile
                    ? <Profile
                        profile={this.props.profile}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatusTC}
                    />
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC,
        getUserStatusTC,
        updateUserStatusTC}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)