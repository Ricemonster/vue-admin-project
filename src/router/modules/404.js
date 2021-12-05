export default {
    path: '*',
    name: '404',
    meta: {
        title: '404',
        icon: '404',
        hidden: true,
    },
    component: () => {
        import ('@/views/404.vue')
    }
}