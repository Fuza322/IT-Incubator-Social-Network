import React from "react"
import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {
    UserType,
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
} from "../../redux/users-reducer"
import {usersAPI} from "../../api/api"
import {Users} from "./Users"
import {Preloader} from "../common/Preloader/Preloader"


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => ReturnType<typeof follow>
    unfollow: (userId: number) => ReturnType<typeof unfollow>
    setUsers: (users: Array<UserType>) => ReturnType<typeof setUsers>
    setCurrentPage: (cureent: number) => ReturnType<typeof setCurrentPage>
    setTotalUsersCount: (totalCount: number) => ReturnType<typeof setTotalUsersCount>
    toggleIsFetching: (isFetching: boolean) => ReturnType<typeof toggleIsFetching>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ReturnType<typeof toggleFollowingProgress>
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching
                    ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    pageSize={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer)