import request from '../network/request'

export const getAllTask = async () => {
    return request.get("/tasks")
}