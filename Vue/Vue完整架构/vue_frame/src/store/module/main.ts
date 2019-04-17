import { MainState } from '@/types/views/main.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as MainApi from '@/api/main'

const state: MainState = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<MainState, any> = {
  author: (state: MainState) => state.author
}

// 更改state
const mutations: MutationTree<MainState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: MainState, data: MainState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<MainState, any> = {
  UPDATE_STATE_ASYN({ commit, state: MainState }, data: MainState) {
    commit('UPDATE_STATE', data)
  },
  postData({ commit, state: LoginState },data:MainState) {
    MainApi.postData(data);
  }
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   MainApi.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

