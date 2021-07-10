import React from "react"
import style from "./ProfileInfo.module.css"

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://cdn.wpbeaveraddons.com/wp-content/uploads/luca-micheli-422052-unsplash-2.jpg" alt="ProfileImage"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo