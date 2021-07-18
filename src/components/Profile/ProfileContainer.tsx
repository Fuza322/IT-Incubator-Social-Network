import React from "react"
import {withRouter, RouteComponentProps} from "react-router-dom"
import {compose} from "redux"
import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {ProfileType, getUserProfileTC} from "../../redux/profile-reducer"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import Profile from "./Profile"

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    getUserProfileTC: (userId: number) => void
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        return (
            <div>
                {this.props.profile
                    ? <Profile
                        profile={this.props.profile}
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
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)