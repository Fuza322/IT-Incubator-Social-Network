import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsType} from '../../../redux/state';

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

    return (
        <div>
            My posts
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