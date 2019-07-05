
import { HandleState } from '@/types/rescue/handle.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
// import { HandleApi } from '@/config/api';

const state: HandleState = {
    
}

// 强制使用getter获取state
const getters: GetterTree<HandleState, any> = {

}

// 更改state
const mutations: MutationTree<HandleState> = {
    // 更新state都用该方法
    UPDATE_STATE(state: HandleState, data: HandleState) {
        for (let key in data) {
            if (!data.hasOwnProperty(key)) { return }
            state[key] = data[key]
        }
    }
}

const actions: ActionTree<HandleState, any> = {
    /* 更改state */
    updateState({ commit, state: HandleState }, data: HandleState) {
        commit('UPDATE_STATE', data)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
