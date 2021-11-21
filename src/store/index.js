import Vue from 'vue';
import Vuex from 'vuex';
import { getToken, setToken } from '../utils/auth.js'
Vue.use(Vuex)


let store = new Vuex.Store({
    state: { token: getToken() },
    mutations: {

    },
    actions: {
        login({ commit }) {},
        getUserInfo({ commit }) {

        }
    }
})

export default store