import React from 'react';
import s from './Profile.module.css'
import MyPosts, {MyPostsType} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from './MyPosts/Post/Post';

export type ProfilePageType = {
    posts: Array<PostType>
}

function Profile(props: ProfilePageType) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;