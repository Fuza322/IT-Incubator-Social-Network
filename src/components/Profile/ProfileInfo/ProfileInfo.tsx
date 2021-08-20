import React from "react"
import {ProfileType} from "../../../redux/profile-reducer"
import {Preloader} from "../../common/Preloader/Preloader"
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks"
//import {ProfileStatus} from "./ProfileStatus"
import style from "./ProfileInfo.module.css"

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt="Profile avatar"/>
                {props.profile.fullName
                && <div>
                    Full name:
                    <span> {props.profile.fullName}</span>
                </div>}
                {props.profile.aboutMe
                && <div>
                    About me:
                    <span> {props.profile.aboutMe}</span>
                </div>}
                {/*<ProfileStatus*/}
                {/*    status={props.status}*/}
                {/*    updateUserStatus={props.updateUserStatus}*/}
                {/*/>*/}
                <ProfileStatusWithHooks
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
                {props.profile.contacts.facebook
                && <div>
                    Facebook:
                    <span> {props.profile.contacts.facebook}</span>
                </div>}
                {props.profile.contacts.github
                && <div>
                    Github:
                    <span> {props.profile.contacts.github}</span>
                </div>}
                {props.profile.lookingForAJob
                    ? <div>
                        Looking for job:
                        <span> Yes</span>
                    </div>
                    : <div>
                        Looking for job:
                        <span> No</span>
                    </div>}
                {props.profile.lookingForAJobDescription
                && <div>
                    Looking for job description
                    <span>: {props.profile.lookingForAJobDescription}</span>
                </div>}
            </div>
        </div>
    )
})