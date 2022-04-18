import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //   path: '/',
    //   name: 'portal',
    //   component: () => import('@/views/portal/Home'),
    //   redirect: '/portal/home',
    //   meta: {title: '门户', icon: '', permission: ['portal']},
    //   children: [],
    // }
];

const router = new VueRouter({
    routes
});

export default router
