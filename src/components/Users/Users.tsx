import React from "react"
import {NavLink} from "react-router-dom"
import {UserType} from "../../redux/users-reducer"
import userPhoto from "../../assets/images/user.png"
import style from "./Users.module.css"


type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                <div>
                    {pages.map(pageNumber => {
                        return (
                            <span
                                key={pageNumber}
                                onClick={() => props.onPageChanged(pageNumber)}
                                className={props.currentPage === pageNumber ? style.selectedPage : ""}>{pageNumber}
                            </span>
                        )
                    })}
                </div>
                {props.users.map(u => {
                        return (
                            <div key={u.id}>
                                <span>
                                    <div>
                                        <NavLink to={`/profile/${u.id}`}>
                                            <img
                                                src={u.photos.small ? u.photos.small : userPhoto}
                                                alt={"User's avatar"}
                                                className={style.usersPhoto}
                                            />
                                        </NavLink>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button onClick={() => props.unfollow(u.id)}>Follow</button>
                                            : <button onClick={() => props.follow(u.id)}>Unfollow</button>}
                                    </div>
                                </span>
                                <span>
                                    <span>
                                        <div>{u.name}</div>
                                        <div>{u.status}</div>
                                    </span>
                                    <span>
                                        <div>{"u.location.country"}</div>
                                        <div>{"u.location.city"}</div>
                                    </span>
                                </span>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}