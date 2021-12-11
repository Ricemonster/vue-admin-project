export default {
    path: '/permissions',
    name: 'permissions',
    meta: {
        title: '权限管理',
        icon: 'lock',
        roles: ['admin']
    },
    component: () =>
        import ('@/views/permissions.vue')
}