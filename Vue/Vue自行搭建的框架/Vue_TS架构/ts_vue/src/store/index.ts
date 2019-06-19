import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {/* 定义数据 */
        loadingInstace: null/* 显示加载 */
    },
    mutations: {// 修改状态的唯一途径
        showLoading(state, Loading) {
            state.loadingInstace = Loading.service({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
        },
        hideLoading(state, Loading) {
            (state.loadingInstace as any).close();
        }
    },
    actions: {/* 异步操作 Action提交的是mutation*/

    },
    modules: {/* 集成第三方的vuex */

    }

});

