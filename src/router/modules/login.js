export default {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录',
        icon: 'login',
        hidden: true,
    },
    component: () =>
        import ('@/views/login.vue')
}