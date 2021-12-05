const getters = {
    token: (state, getter) => state.user.token,
    roles: (state, getter) => state.user.userinfo.roles ? state.user.userinfo.roles : '',
    routes: (state, getter) => state.user.routes,
    whiteList: (state, getter) => state.user.whiteList
}

export default getters