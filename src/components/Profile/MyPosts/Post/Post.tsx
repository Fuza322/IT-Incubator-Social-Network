import React from 'react';
import s from './Post.module.css'
import {PostType} from '../../../../redux/state';

function Post(props: PostType) {

    return (
        <div className={s.item}>
            {/*comment for id*/}
            <div>
                ID: {props.id}
            </div>
            {/*comment for id*/}
            <img
                src='https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg'
                alt='UserPostImage'/>
            {props.message}
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;