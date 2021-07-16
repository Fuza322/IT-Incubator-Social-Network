import React from "react"
import {PostType} from "../../../../redux/profile-reducer"
import style from "./Post.module.css"

type PostPropsType = PostType

function Post(props: PostPropsType) {

    return (
        <div className={style.item}>
            {/*comment for id*/}
            <div>
                ID: {props.id}
            </div>
            {/*comment for id*/}
            <img
                src="https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg"
                alt="UserPostImage"/>
            {props.message}
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post