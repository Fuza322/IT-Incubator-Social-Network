import React from 'react';
import {ActionsType, addPostActionCreator, UpdateNewPostActionCreator} from '../../../redux/store';
import MyPosts from "./MyPosts";
import {RootReduxStateType} from "../../../redux/redux-store";

type MyPostsContainerPropsType = {
    state: RootReduxStateType
    dispatch: (action: ActionsType) => void
}

function MyPostsContainer(props: MyPostsContainerPropsType) {

    let addPost = () => {
        props.dispatch(addPostActionCreator(props.state.profilePage.newPostText))
    }

    let onPostChange = (text: string) => {
        props.dispatch(UpdateNewPostActionCreator(text))
    }

    return (
        <MyPosts
            posts={props.state.profilePage.posts}
            newPostText={props.state.profilePage.newPostText}
            updateNewPostText={onPostChange}
            addPost={addPost}
        />
    )
}

export default MyPostsContainer;