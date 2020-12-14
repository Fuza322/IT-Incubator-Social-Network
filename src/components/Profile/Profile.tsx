import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPost, ProfilePageType, updateNewPostText} from '../../redux/state';

function Profile(props: ProfilePageType) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </div>
    )
}

export default Profile;