import request from '../network/request'

export const getAllUsers = () => {
    return request.get("/users")
}