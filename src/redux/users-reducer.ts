export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean,
    fullName: string
    status: string
    location: {city: string, country: string}
}

export type UsersPageType = {
    users: Array<UserType>
}

let initialState: UsersPageType = {
    users: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        } else {
                            return u
                        }
                    }
                )
            }
        }
        case UNFOLLOW: {
            debugger
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        } else {
                            return u
                        }
                    }
                )
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {type: FOLLOW, userId: userId} as const
}

export const unfollowAC = (userId: number) => {
    return {type: UNFOLLOW, userId: userId} as const
}

export const setUsersAC = (users: Array<any>) => {
    return {type: SET_USERS, users: users} as const
}

export type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>