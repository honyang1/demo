import Vue from 'vue';
import Router from 'vue-router';

import { session } from "@/utils/common"
import Rescue from './rescue';

Vue.use(Router);
/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 * @param {boolean} requireAuth 是否需要登录
 */
const routes: any = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/basic/login/login.vue')
    },
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/basic/main/main.vue'),
        meta: {
            icon: '',
            keepAlive: false,
            title: 'main',
            requireAuth: true
        },
        children: [...Rescue]
    }
];
// const routes = baseRoutes.concat(demo); // 追加 2个数组连接
const router = new Router({
    routes,
    mode: 'history'
})



router.beforeEach((to, from, next) => { // 跳转之前截取
    let token = session.get('token');
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
