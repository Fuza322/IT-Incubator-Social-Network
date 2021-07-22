import React from "react"
import {compose} from "redux"
import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {
    getUsersTC,
    followTC,
    unfollowTC,
    setCurrentPageAC,
    toggleFollowingProgressAC,
    UserType
} from "../../redux/users-reducer"
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
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (cureent: number) => ReturnType<typeof setCurrentPageAC>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ReturnType<typeof toggleFollowingProgressAC>
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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

export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {
        getUsers: getUsersTC,
        follow: followTC,
        unfollow: unfollowTC,
        setCurrentPage: setCurrentPageAC,
        toggleFollowingProgress: toggleFollowingProgressAC
    })
)(UsersContainer)