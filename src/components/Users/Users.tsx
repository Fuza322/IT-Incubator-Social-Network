import React from "react"
import {UserType} from "../../redux/users-reducer"
import style from "./Users.module.css"

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://nbnews.com.ua/wp-content/uploads/2021/02/imgonline-com-ua-resize-a3jcoto6bgajxvc.jpg",
                followed: false,
                fullName: "Dmitry",
                status: "I am a boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://cdnimg.rg.ru/img/content/182/43/90/46_d_850.jpg",
                followed: true,
                fullName: "Sasha",
                status: "I am a stupid",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://www.belta.by/images/storage/news/with_archive/2020/000022_1608837308_421722_big.jpg",
                followed: false,
                fullName: "Andrew",
                status: "I am a energy",
                location: {city: "Kiev", country: "Ukraine"}
            }])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photoUrl}
                            alt={"User's avatar"}
                            className={style.usersPhoto}
                        />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Follow</button>
                            : <button onClick={() => props.follow(u.id)}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}