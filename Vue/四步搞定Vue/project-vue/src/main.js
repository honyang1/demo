import Vue from 'vue'
import App from './App.vue'
import store from './store'

//使用组件三部曲：引入组件，注册组件，使用组件

Vue.config.productionTip = false//生成环境配置  默认是false  

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
