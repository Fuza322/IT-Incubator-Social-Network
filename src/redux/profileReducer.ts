import {PostType, addPostActionCreator, UpdateNewPostActionCreator, ActionsType} from "./state";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type ProfileActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof UpdateNewPostActionCreator>

const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: action.newText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export default profileReducer