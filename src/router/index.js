import Vue from 'vue';
import VueRouter from 'vue-router'
import store from '@/store/index.js'
import NProgress from 'nprogress'
import { repeatRoutes } from '@/utils/util.js'
Vue.use(VueRouter)
let routes = [{
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
        },
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
    if (store.getters.token) { // 有token
        if (to.path === '/login') {
            next('/');
        } else {
            if (to.meta && to.meta.roles) { // 页面要权限的
                if (store.getters.roles !== '') { // 页面已拉取用户数据
                    // 判断权限
                } else { // 页面未拉取用户数据

                }
            } else { // 页面不需要权限的
                if (store.getters.roles !== '') { // 页面已拉取用户数据
                    next()
                } else { // 页面未拉取用户数据
                    store.dispatch('user/getuserinfo', store.getters.token).then(_ => {
                        store.dispatch('user/buildroutes', {
                            roles: store.getters.roles
                        }).then(_ => {
                            repeatRoutes(router.options.routes, store.getters.routes).forEach((item) => {
                                router.addRoute(item)
                            })
                            next()
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
    NProgress.start()
})


router.afterEach((to, from) => {
    document.title = to.meta.title + ' - Admin Template Pro'
    NProgress.done()
})

export default router