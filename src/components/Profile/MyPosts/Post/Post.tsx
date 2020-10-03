import React from 'react';
import s from './Post.module.css'

function Post() {
    return (
        <div className={s.item}>
            <img src='https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg'/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;