import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import { UpdateNewPostActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import { RootStateType } from '../../../redux/redux-store';

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;