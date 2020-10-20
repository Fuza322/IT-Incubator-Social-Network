import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPost, ProfilePageType} from '../../redux/state';

function Profile(props: ProfilePageType) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={addPost}/>
        </div>
    )
}

export default Profile;