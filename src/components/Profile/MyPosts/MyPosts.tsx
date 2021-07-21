import React from "react"
import {reduxForm, Field, InjectedFormProps} from "redux-form"
import {required, maxLenghtCreator} from "../../../utils/validators/validators"
import {FormElementTextArea} from "../../common/FormControls/FormControls"
import Post from "./Post/Post"
import {PostType} from "../../../redux/profile-reducer"
import style from "./MyPosts.module.css"

type PostFormTextType = {
    newPostText: string
}

const maxLenght50 = maxLenghtCreator(50)

const AddNewPostForm = (props: InjectedFormProps<PostFormTextType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"newPostText"}
                    placeholder={"Post message"}
                    component={FormElementTextArea}
                    validate={[required, maxLenght50]}
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