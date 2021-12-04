export default {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录',
        icon: 'login'
    },
    component: () =>
        import ('@/views/login.vue')
}