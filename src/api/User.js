import instance from '../utils/reuqest'

export function Login(params) {
    return instance.get('/user/login', {
        params
    })
}

export function getUserinfo(params, headers = {}) {
    return instance.post('', params, {
        headers
    })
}