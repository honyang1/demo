import Vue from 'vue';
import Router from 'vue-router';

import demo from './demo/demo';

import login from '@/views/login/login.vue';

Vue.use(Router);

const baseRoutes: any = [
    {
        path: '/',
        name: 'login',
        component: login
    }
]; // 默认
const routes = baseRoutes.concat(demo); // 追加

const router = new Router({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => { // 跳转之前截取
    let token = 'token';
    if (to.meta.requireAuth) {
        if (token) {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }// 将跳转的路由path作为参数，登陆成功后跳转到该路由。
            })
        }
    } else {
        next()
    }
})

router.afterEach(() => { // 跳转之后截取

})

export default router
