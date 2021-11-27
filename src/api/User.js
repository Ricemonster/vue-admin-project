import instance from '../utils/reuqest'

export function login(params) {
    console.log(params)
    return instance({
        url: '/user/login',
        method: 'post',
        params
    })
}

export function getUserinfo(params, headers = {}) {
    return instance.post('', params, {
        headers
    })
}