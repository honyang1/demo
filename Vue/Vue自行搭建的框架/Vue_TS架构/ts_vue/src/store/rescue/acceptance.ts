
import { AcceptanceState } from '@/types/rescue/acceptance.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
// import { AcceptanceApi } from '@/config/api';

const state: AcceptanceState = {

}

// 强制使用getter获取state
const getters: GetterTree<AcceptanceState, any> = {

}

// 更改state
const mutations: MutationTree<AcceptanceState> = {
    // 更新state都用该方法
    UPDATE_STATE(state: AcceptanceState, data: AcceptanceState) {
        for (let key in data) {
            if (!data.hasOwnProperty(key)) { return }
            state[key] = data[key]
        }
    }
}

const actions: ActionTree<AcceptanceState, any> = {
    /* 更改state */
    updateState({ commit, state: AcceptanceState }, data: AcceptanceState) {
        commit('UPDATE_STATE', data)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
