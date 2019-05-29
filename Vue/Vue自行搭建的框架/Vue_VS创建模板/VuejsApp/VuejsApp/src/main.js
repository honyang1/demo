import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Ajax from './utils/http' //引用api文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import utils from './utils/common'
import './assets/Css/Style.css'



Vue.use(ElementUI)

Vue.prototype.$Ajax = Ajax.Ajax; //将Api 方法绑定到全局
Vue.prototype.$app = utils; //将公共方法绑定到全局

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')