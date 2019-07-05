import Vue from 'vue';
import Vuex from 'vuex';
import Login from './basic/login'
import { Loading } from 'element-ui';
import { session } from '@/utils/common';
import base from '@/config/base';

import ChatClients from '@/assets/scripts/chatlib.ts';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {/* 定义数据 */
        loadingInstace: null,           /* 显示加载 */
        rescue: {
            orderId: session.get('orderId')
        },
        common: {
            token: session.get('token'),
        }
    },
    getters: {                                               /* getters -计算属性 内必须存放固定的值 或者从state内读取的值 否则会出现取值出错的问题 */
        common: (state: any) => {                            /* 项目公共的数据 */
            return {
                appKey: 'Elderly.SOS',                       /* appKey */
                appCode: 'Operation',                        /* Operation-运营端 Service-商家端 */
                token: state.common.token,                   /* token */
            }
        },
        client: (state: any) => ChatClients.Client(state.common.token, base.messageBase),  /* 建立signalr连接 */
        rescue: (state: any) => {                            /* 救援系统的公共数据 */
            return {
                orderId: state.rescue.orderId
            }
        }
    },
    mutations: {// 修改状态的唯一途径
        showLoading(state) {
            state.loadingInstace = Loading.service({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
        },
        hideLoading(state) {
            if (state.loadingInstace !== null)
                (state.loadingInstace as any).close();
        },
        updata_rescue(state, data) { // 修改rescue内的数据    
            for (let key in data) {
                if (!data.hasOwnProperty(key)) { return }
                state[key] = data[key]
                session.set(key, data[key])
            }
        }

    },
    actions: {/* 异步操作 Action提交的是mutation */
        updateRescue({ commit }, data: any) { // 修改rescue的数据
            commit('updata_rescue', data)
        },
    },
    modules: {/* 集成第三方的vuex */
        Login
    }

});

