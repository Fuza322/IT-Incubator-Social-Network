import React, {useCallback} from "react"
import {reduxForm, Field, InjectedFormProps} from "redux-form"
import {PostType} from "../../../redux/profile-reducer"
import {FormElementTextArea} from "../../common/FormControls/FormControls"
import {Post} from "./Post/Post"
import {required, maxLenghtCreator} from "../../../utils/validators/validators"
import style from "./MyPosts.module.css"

type PostFormTextType = {
    newPostText: string
}

const maxLenght50 = maxLenghtCreator(50)

const AddNewPostForm = React.memo((props: InjectedFormProps<PostFormTextType>) => {
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
})

const AddNewPostReduxForm = reduxForm<PostFormTextType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (values: string) => void
}

export const MyPosts = React.memo((props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = useCallback((values: PostFormTextType) => {
        props.addPost(values.newPostText)
    }, [props])

    return (
        <div>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
})