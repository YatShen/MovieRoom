import Vue from 'vue';
import store from '@/stores/';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import VueRouter from 'vue-router';

/* Layout */
import Layout from '@/layouts/default/Layout';

/* Router Modules */
import adminRouter from './modules/admin';

Vue.use(VueRouter);

export const constantRouterMap = [
    {
        path: '/login',
        name: 'Login',
        component: resolve => require(['@/views/Auth/Login'], resolve),
        hidden: true
    },{
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: resolve => require(['@/views/Index'], resolve),
                meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
            },
        ]
    },

    { path: '*', redirect: 'dashboard' }
]

let router = new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    routes: constantRouterMap
})

// 全局路由
router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start()

    // login guard
    if (to.name === 'Login') {
        if (!_.isEmpty(store.state.auth.account)) {
            next({ name: 'Dashboard' })
        } else {
            next()
        }
    } else {
        if (_.isEmpty(store.state.auth.account)) {
            await store.dispatch('fetch')

            next()
        } else {
            next()
        }
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})

export default router

export const asyncRouterMap = [
    adminRouter,
]