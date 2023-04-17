import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const route = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'login',
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue'),
        },
    ],
});

export default route;
