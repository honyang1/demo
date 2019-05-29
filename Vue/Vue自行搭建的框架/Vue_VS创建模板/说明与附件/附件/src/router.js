import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import FormVuex from "./views/FormVuex.vue";
import App from './utils/common'
// import About from './views/About.vue'
// import Login from './views/Login.vue';
// import Table from './views/Table.vue'

Vue.use(Router)

const router = new Router({
  // routes: [
    // {
      // path: '/',
      // name: 'home',
      // component: Home
    // },
    // {
      // path: "/Vuex",
      // name: "Vuex",
      // component: FormVuex,
      // meta: {
        // requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      // }
    // },
    // {
      // path: "/table",
      // name: "table",
      // component: Table,
      // meta: {
        // requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      // }
    // },
    // {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component:About,
      // meta: {
        // requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      // }
    // },
    // {
      // path: '/login',
      // name: 'login',
      // component:Login
    // }
  // ]
});


router.beforeEach((to, from, next) => {
  const token = App.Session.Get('Token')
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (token)   // 通过vuex state获取当前的token是否存在
      next();
    else
      next({
        path: '/login',
        query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
  } 
  else {
    next();
  }
})

// 跳转之后
router.afterEach(() => {
  //
})

export default router

