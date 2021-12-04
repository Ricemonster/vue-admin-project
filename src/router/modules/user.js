export default {
    path: '/user',
    name: 'user',
    meta: {
        title: '个人中心',
        icon: 'user',
        roles: ['admin']
    },
    component: () =>
        import ('@/views/user.vue')
}