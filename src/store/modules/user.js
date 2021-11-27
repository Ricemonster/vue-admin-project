import { getToken, setToken } from '@/utils/auth.js'
import { login, getUserinfo } from '../../api/user.js'

const state = {
    token: getToken(),
    userinfo: {
        roles: []
    }
}

const mutations = {

}

const actions = {
    login({ commit }, userInfo) {
        let { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username, password })
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}