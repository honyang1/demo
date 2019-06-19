import Vue from 'vue'
import Vuex from 'vuex'
import { Loading } from 'element-ui';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadingInstace: null/* 显示加载 */
    },
    mutations: {
        showLoading(state) {
            state.loadingInstace = Loading.service({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
        },
        hideLoading(state) {
            if (state.loadingInstace !== null) {
                state.loadingInstace.close();
            }
        }
    },
    actions: {},
    modules: {}
})