import Vue from 'vue';
import VueRouter from 'vue-router'
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
}]

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