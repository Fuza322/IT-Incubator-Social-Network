import React from "react"
import axios from "axios"
import {withRouter, RouteComponentProps} from "react-router-dom"
import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {setUserProfile, ProfileType} from "../../redux/profile-reducer"
import Profile from "./Profile"

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => ReturnType<typeof setUserProfile>
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <div>
                {this.props.profile
                    ? <Profile profile={this.props.profile}/>
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataContainedComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainedComponent)