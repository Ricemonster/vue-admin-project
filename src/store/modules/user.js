import { getToken, setToken } from '@/utils/auth.js'
import { getallroutes, buildroutes } from '@/utils/util.js'
import { login, getUserinfo } from '../../api/user.js'
import { Message } from 'element-ui'
import router from '@/router/index.js'

const state = {
    token: getToken(), // token
    userinfo: { // 用户信息
        roles: ''
    },
    routes: [],
    whiteList: [] // 白名单

}

const mutations = {
    setToken(state, data) {
        state.token = data
    },
    setUserinfo(state, data) {
        state.userinfo = data
    },
    setRoutes(state, data) {
        state.routes = data
    }
}

const actions = {
    login({ commit }, userInfo) {
        let { username, password } = userInfo
        login({ username, password })
            .then(res => {
                if (res.data.status === 'error') {
                    Message({
                        message: '用户名或密码错误!',
                        type: 'error'
                    });
                } else {
                    setToken(res.data.data.token)
                    commit('setToken', res.data.data.token)
                    router.push('/')
                }
            })
    },
    getuserinfo({ commit }, token) {
        return new Promise((resolve, reject) => {
            getUserinfo({ token }).then(res => {
                commit('setUserinfo', res.data.data)
                resolve()
            })
        })

    },
    buildroutes({ commit }, data) {
        return new Promise((resolve, reject) => {
            let { roles } = data
            let routes = buildroutes(getallroutes(), roles)
            commit('setRoutes', routes)
            resolve()
        })

    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}