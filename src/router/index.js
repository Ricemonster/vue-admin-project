import Vue from 'vue';
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
Vue.use(VueRouter)
let routes = [{
        path: '/',
        name: 'home',
        meta: {
            title: '导航页',
            icon: 'home'
        },
        component: () =>
            import ('@/views/home.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            icon: 'login'
        },
        component: () =>
            import ('@/views/login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})


router.afterEach((to, from) => {
    document.title = to.meta.title
    NProgress.done()
})

export default router