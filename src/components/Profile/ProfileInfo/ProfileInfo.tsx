import React from "react"
import {ProfileType} from "../../../redux/profile-reducer"
import {Preloader} from "../../common/Preloader/Preloader"
import ProfileStatus from "./ProfileStatus"
import style from "./ProfileInfo.module.css"

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://cdn.wpbeaveraddons.com/wp-content/uploads/luca-micheli-422052-unsplash-2.jpg"*/}
            {/*         alt="ProfileImage"/>*/}
            {/*</div>*/}
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt="Profile avatar"/>
                {props.profile.fullName
                    ? <div>
                        Full name:
                        <span> {props.profile.fullName}</span>
                    </div>
                    : null
                }
                {props.profile.aboutMe
                    ? <div>
                        About me:
                        <span> {props.profile.aboutMe}</span>
                    </div>
                    : null
                }
                <ProfileStatus
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
                {props.profile.contacts.facebook
                    ? <div>
                        Facebook:
                        <span> {props.profile.contacts.facebook}</span>
                    </div>
                    : null
                }
                {props.profile.contacts.github
                    ? <div>
                        Github:
                        <span> {props.profile.contacts.github}</span>
                    </div>
                    : null
                }
                {props.profile.lookingForAJob
                    ? <div>
                        Looking for job:
                        <span> Yes</span>
                    </div>
                    : <div>
                        Looking for job:
                        <span> No</span>
                    </div>
                }
                {props.profile.lookingForAJobDescription
                    ? <div>
                        Looking for job description
                        <span>: {props.profile.lookingForAJobDescription}</span>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default ProfileInfo