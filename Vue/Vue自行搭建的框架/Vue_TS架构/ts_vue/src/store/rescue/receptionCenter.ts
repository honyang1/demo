
import { ReceptionCenterState } from '@/types/rescue/receptionCenter.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
// import { HearApi } from '@/config/api';

const state: ReceptionCenterState = {
   
}

// 强制使用getter获取state
const getters: GetterTree<ReceptionCenterState, any> = {

}

// 更改state
const mutations: MutationTree<ReceptionCenterState> = {
    // 更新state都用该方法
    UPDATE_STATE(state: ReceptionCenterState, data: ReceptionCenterState) {
        for (let key in data) {
            if (!data.hasOwnProperty(key)) { return }
            state[key] = data[key]
        }
    }
}

const actions: ActionTree<ReceptionCenterState, any> = {
    /* 更改state */
    updateState({ commit, state: HearState }, data: ReceptionCenterState) {
        commit('UPDATE_STATE', data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
