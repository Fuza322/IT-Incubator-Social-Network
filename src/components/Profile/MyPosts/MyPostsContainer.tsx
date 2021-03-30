import React from 'react';
import {addPostActionCreator, UpdateNewPostActionCreator} from '../../../redux/store';
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsContainerPropsType = {

}

function MyPostsContainer(props: MyPostsContainerPropsType) {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator(state.profilePage.newPostText))
                }

                let onPostChange = (text: string) => {
                    store.dispatch(UpdateNewPostActionCreator(text))
                }
                return (
                    <MyPosts
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;