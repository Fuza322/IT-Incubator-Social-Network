import React from "react"
import {connect} from "react-redux"
import {RootStateType} from "../../redux/redux-store"
import {
    getUsersTC,
    followTC,
    unfollowTC,
    setCurrentPage,
    toggleFollowingProgress,
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
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    setCurrentPage: (cureent: number) => ReturnType<typeof setCurrentPage>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ReturnType<typeof toggleFollowingProgress>
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
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
                    follow={this.props.followTC}
                    unfollow={this.props.unfollowTC}
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
    getUsersTC,
    followTC,
    unfollowTC,
    setCurrentPage,
    toggleFollowingProgress
})(UsersContainer)