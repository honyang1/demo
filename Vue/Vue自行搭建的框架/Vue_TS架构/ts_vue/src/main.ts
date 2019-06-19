import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { com } from './utils/common';
import elementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(elementUi);
Vue.config.productionTip = false;

declare module "vue/types/vue" {
  interface Vue {
    $com: any
  }
}
Vue.prototype.$com = com;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
