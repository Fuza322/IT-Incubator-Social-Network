import React from 'react';
import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn.wpbeaveraddons.com/wp-content/uploads/luca-micheli-422052-unsplash-2.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;