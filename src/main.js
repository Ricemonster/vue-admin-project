import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'nprogress/nprogress.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'
import './styles/Base/base.scss';
import './static/font/icons.css'
import '../mock'
const echarts = require('echarts')
Vue.prototype.echarts = echarts;
const echartsGL = require('echarts-gl')
Vue.prototype.echartsGL = echartsGL;

Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')