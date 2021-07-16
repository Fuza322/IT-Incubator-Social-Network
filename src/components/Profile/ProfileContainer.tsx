import React from "react"
import axios from "axios"
import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {setUserProfile, ProfileType} from "../../redux/profile-reducer"
import Profile from "./Profile"

type ProfileContainerPropsType = {
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)