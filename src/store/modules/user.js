import { getToken, setToken } from '@/utils/auth.js'
import { login, getUserinfo } from '../../api/user.js'

const state = {
    token: getToken(),
    userinfo: {
        roles: []
    }
}

const mutations = {
    setToken(state, data) {
        state.token = data
    }
}

const actions = {
    login({ commit }, userInfo) {
        let { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username, password })
                .then(res => {
                    resolve(res)
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