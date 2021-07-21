import React from "react"
import {reduxForm, Field, InjectedFormProps} from "redux-form"
import Post from "./Post/Post"
import {PostType} from "../../../redux/profile-reducer"
import style from "./MyPosts.module.css"

type PostFormTextType = {
    newPostText: string
}

const AddNewPostForm = (props: InjectedFormProps<PostFormTextType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"newPostText"}
                    component={"textarea"}
                />
            </div>
            <button>Add post</button>
        </form>
    )
}

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (values: string) => void
}

const AddNewPostReduxForm = reduxForm<PostFormTextType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (values: PostFormTextType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts