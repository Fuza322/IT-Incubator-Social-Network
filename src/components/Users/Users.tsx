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
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

export const Users = React.memo((props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
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
                                            ? <button
                                                disabled={props.followingInProgress.some(id => id === u.id)}
                                                onClick={() => {
                                                    props.unfollow(u.id)
                                                }}>Unfollow
                                            </button>
                                            : <button
                                                disabled={props.followingInProgress.some(id => id === u.id)}
                                                onClick={() => {
                                                    props.follow(u.id)
                                                }}>Follow
                                            </button>}
                                    </div>
                                </span>
                            <span>
                                    <div>
                                        <span>{u.name}</span>
                                        <span>{u.status}</span>
                                    </div>
                                </span>
                        </div>
                    )
                }
            )}
        </div>
    )
})