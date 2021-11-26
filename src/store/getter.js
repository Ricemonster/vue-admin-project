const getters = {
    token: (state, getter) => state.user.token,
    roles: (state, getter) => state.user.userinfo.roles
}

export default getters