import React from "react"
import axios from "axios"
import {UserType} from "../../redux/users-reducer"
import userPhoto from "../../assets/images/user.png"
import style from "./Users.module.css"

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photos.small ? u.photos.small : userPhoto}
                            alt={"User's avatar"}
                            className={style.usersPhoto}
                        />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => this.props.unfollow(u.id)}>Follow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Unfollow</button>}
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
                </div>)}
            </div>
        )
    }
}