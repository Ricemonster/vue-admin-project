import { getToken, setToken } from '@/utils/auth.js'
import { login, getUserinfo } from '../../api/user.js'
import { Message } from 'element-ui'

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
        login({ username, password })
            .then(res => {
                if (res.data.status === 'error') {
                    Message({
                        message: '用户名或密码错误!',
                        type: 'error'
                    });
                } else {
                    console.log(res.data.data)
                }
            })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}