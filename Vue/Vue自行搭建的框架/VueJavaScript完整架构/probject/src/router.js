import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: []
});

// 跳转之前截取
router.beforeEach((to, from, next) => {
  const token = App.session.get('Token')
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if (token) // 通过vuex state获取当前的token是否存在
          next();
      else
          next({
              path: '/login',
              query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
  } else {
      next();
  }
})

// 跳转之后截取
router.afterEach(() => {
  //
})

export default router
