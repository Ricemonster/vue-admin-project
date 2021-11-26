import { getToken, setToken } from '@/utils/auth.js'

const state = {
    token: getToken(),
    userinfo: {
        roles: []
    }
}

const mutations = {

}

const actions = {

}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}