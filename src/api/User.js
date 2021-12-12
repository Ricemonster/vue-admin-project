import instance from '../utils/reuqest'

export function login(params) {
    return instance.post('/user/login', params)
}

export function getUserinfo(params) {
    return instance.post('/user/getuserinfo', params)
}

export function getAllUsers() {
    return instance.post('/user/getAllUser')
}

export function getUserGroup() {
    return instance.post('/user/getUserGroup')
}