import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use({
  install(vue){
    Vue.prototype.$eventBuds=new Vue();
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
