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
                {postData.map(p => {return (<Post message={p.message} likesCount={p.likesCount}/>)})}
            </div>
        </div>
    )
}

export default MyPosts;