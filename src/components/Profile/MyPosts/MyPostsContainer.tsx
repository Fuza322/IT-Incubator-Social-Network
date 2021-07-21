import {connect} from "react-redux"
import {Dispatch} from "redux"
import {RootStateType} from "../../../redux/redux-store"
import {addPostAC, PostType} from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts"

type MapStateToPropsType = {
    posts: Array<PostType>
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer