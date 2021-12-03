import instance from '../utils/reuqest'

export function login(params) {
    return instance.post('/user/login', params)
}

export function getUserinfo(params, headers = {}) {
    return instance.post('/user/getuserinfo', params)
}