export default {
    path: '*',
    name: '404',
    meta: {
        title: '404',
        icon: '404'
    },
    component: () => {
        import ('@/views/404.vue')
    }
}