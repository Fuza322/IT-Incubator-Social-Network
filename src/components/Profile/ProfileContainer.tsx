import React from "react"
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {ProfileType, getUserProfileTC} from "../../redux/profile-reducer"
import Profile from "./Profile"

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
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

        if (!this.props.isAuth) {
            return <Redirect to={"/login"}/>
        }

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
        isAuth: state.auth.isAuth
    }
}

const WithUrlDataContainedComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainedComponent)