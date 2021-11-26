import Vue from 'vue';
import VueRouter from 'vue-router'
import store from '@/store/index.js'
import NProgress from 'nprogress'
Vue.use(VueRouter)

const whiteList = []

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
    },
    {
        path: '*',
        name: '404',
        component: () => {
            import ('@/views/404.vue')
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


router.beforeEach((to, from, next) => {
    if (store.getters.token) {
        if (to.meta && to.meta.roles) {

        } else {
            if (store.getters.roles.length !== 0) {
                next()
            } else {
                console.log('未获取用户信息')
            }
        }
    } else {
        if (to.path == '/login') {
            next()
        } else if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/login');
        }
    }
    NProgress.start()
})


router.afterEach((to, from) => {
    document.title = to.meta.title + ' - Admin Template Pro'
    NProgress.done()
})

export default router