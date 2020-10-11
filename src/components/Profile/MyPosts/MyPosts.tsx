import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

type PostDataType = {
    id: string
    message: string
    likesCount: number
}

function MyPosts() {

    let postData: Array<PostDataType> = [
        {id: '1', message: 'Hi, how are you?', likesCount: 12},
        {id: '2', message: 'It is my first post', likesCount: 11}
    ]
    let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    return (
        <div>
            My post
            <div className={s.postsBlock}>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;