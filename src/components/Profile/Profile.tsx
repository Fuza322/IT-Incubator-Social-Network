import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootReduxStateType} from "../../redux/redux-store";
import {ActionsType} from "../../redux/store";

type ProfilePropsType = {
    state: RootReduxStateType
    dispatch: (action: ActionsType) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;