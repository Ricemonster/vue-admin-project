export default {
    path: '/',
    redirect: '/home',
    children: [{
        path: 'home',
        name: 'home',
        meta: {
            title: '导航页',
            icon: 'home'
        },
        component: () =>
            import ('@/views/Home/home.vue')
    }, {
        path: 'monitor',
        name: 'monitor',
        meta: {
            title: '监控页',
            icon: 'monitor',
            roles: ['admin'],
            hidden: true
        },
        component: () =>
            import ('@/views/Home/monitor.vue')
    }, {
        path: 'analysis',
        name: 'analysis',
        meta: {
            title: '分析页',
            icon: 'analysis',
            roles: ['admin'],
            hidden: true
        },
        component: () =>
            import ('@/views/Home/analysis.vue')
    }]
}