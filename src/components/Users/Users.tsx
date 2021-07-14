import React from "react"
import axios from "axios"
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
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (cureent: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    /*constructor(props: UsersPropsType) {
        super(props)
    }*/

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChangeHandler = (pageNumber: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
        this.props.setCurrentPage(pageNumber)
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
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
                                onClick={() => this.onPageChangeHandler(pageNumber)}
                                className={this.props.currentPage === pageNumber ? style.selectedPage : ""}>{pageNumber}
                            </span>
                        )
                    })}
                </div>
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