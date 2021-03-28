import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../../redux/store';
import {ProfileActionsType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ProfileActionsType) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;