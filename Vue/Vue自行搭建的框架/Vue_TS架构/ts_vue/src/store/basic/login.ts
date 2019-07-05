import { LoginState, LoginReq } from '@/types/login.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { basicApi } from '@/config/api';
import { session } from '@/utils/common';

const state: LoginState = {
    name: '',       /* 账号 */
    img: '',        /* 头像 */
    realName: '',   /* 姓名 */
    token: ''       /* token令牌 */
}

// 强制使用getter获取state
const getters: GetterTree<LoginState, any> = {
    img: (state: LoginState) => session.get("img")
}

// 更改state
const mutations: MutationTree<LoginState> = {
    // 更新state都用该方法
    UPDATE_STATE(state: LoginState, data: LoginState) {
        for (let key in data) {
            if (!data.hasOwnProperty(key)) { return }
            session.set(key, data[key])
            state[key] = data[key]
        }
    }
}

const actions: ActionTree<LoginState, any> = {
    /* 更改state */
    updateState({ commit, state: LoginState }, data: LoginState) {
        commit('UPDATE_STATE', data)
    },
    /* 登陆 */
    async login({ commit, state: LoginState }, data: LoginReq) {
        await basicApi.login(data).then((res: any) => {
            session.set('token', res.token)
            commit('UPDATE_STATE', res)
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

