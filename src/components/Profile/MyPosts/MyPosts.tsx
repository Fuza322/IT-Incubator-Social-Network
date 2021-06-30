import React from "react"
import Post, {PostType} from "./Post/Post"
import s from "./MyPosts.module.css"

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let newText = newPostElement.current.value
            props.updateNewPostText(newText)
        }
    }

    return (
        <div>
            My posts
            <div className={s.postsBlock}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts