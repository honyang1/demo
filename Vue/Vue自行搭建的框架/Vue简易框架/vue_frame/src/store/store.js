import Vue from 'vue'
import Vuex from 'vuex'

import dialog from './demo/demoStore'
import App from '../utils/common'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "1"
  },
  mutations: {
    saveToken(state, data) {
      state.token = data;
      App.Session.Set("Token", data);///就是这里，保存到了 localStorage 中
    }
  },
  actions: {
    
  },
  modules: {
    dialog
  }
})
//获取使用方法this.$store.state.dialog.formDatas;
//更改使用方法this.$store.commit('Update_State',{key:'dialog_formDatas',data:this.form} )
