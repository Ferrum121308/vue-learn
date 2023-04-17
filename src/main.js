import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 导入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入font-awesome
import 'font-awesome/css/font-awesome.min.css';
// 导入echarts
import * as echarts from 'echarts';
// 导入axios
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
