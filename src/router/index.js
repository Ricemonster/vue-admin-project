import Vue from 'vue';
import VueRouter from 'vue-router'
import store from '@/store/index.js'
import NProgress from 'nprogress'
import { repeatRoutes } from '@/utils/util.js'
Vue.use(VueRouter)
let routes = [{
        path: '/',
        redirect: { name: 'home' },
        component: () =>
            import ('@/views/Home/home.vue'),
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
        meta: {
            title: '404',
            icon: '404',
            hidden: true
        },
        component: () =>
            import ('@/views/404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


router.beforeEach((to, from, next) => {
    NProgress.start()
    if (store.getters.token) { // 有token
        if (to.path === '/login') {
            next('/');
        } else {
            if (to.meta && to.meta.roles) { // 页面要权限的
                if (store.getters.roles !== '') { // 页面已拉取用户数据
                    // 判断权限
                    if (to.meta.roles.indexOf(store.getters.roles) !== -1) {
                        next()
                    } else {
                        next('*')
                    }
                } else { // 页面未拉取用户数据
                    store.dispatch('user/getuserinfo', store.getters.token).then(_ => {
                        store.dispatch('user/buildroutes', {
                            roles: store.getters.roles
                        }).then(_ => {
                            router.addRoutes(repeatRoutes(router.options.routes, store.getters.routes))
                            next({...to, replace: true })
                        })
                    })
                }
            } else { // 页面不需要权限的
                if (store.getters.roles !== '') { // 页面已拉取用户数据
                    next()
                } else { // 页面未拉取用户数据
                    store.dispatch('user/getuserinfo', store.getters.token).then(_ => {
                        store.dispatch('user/buildroutes', {
                            roles: store.getters.roles
                        }).then(_ => {
                            router.addRoutes(repeatRoutes(router.options.routes, store.getters.routes))
                            next({...to, replace: true })
                        })
                    })
                }
            }
        }

    } else { // 没token
        if (to.path == '/login') {
            next()
        } else if (store.getters.whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/login');
        }
    }
})

router.afterEach((to, from) => {
    NProgress.done()
    document.title = to.meta.title + ' - Admin Template Pro'
})

export default router