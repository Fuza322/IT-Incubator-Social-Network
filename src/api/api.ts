import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "eeb17b00-8d12-431d-931f-aa9ad6987492"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    }
}

export const getUsers2 = (currentPage: number, pageSize: number) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(res => {
            return res.data
        })
}