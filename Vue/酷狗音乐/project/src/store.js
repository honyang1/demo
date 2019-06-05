import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true
  },
  mutations: {
    updateIsLoading(state, loading) {
      state.isLoading = loading;
    }
  },
  actions: {

  }
})
