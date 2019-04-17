import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// vuex 中的状态是响应式的
let store = new Vuex.Store({
    state:{
        count:110//定义一个状态
    },
    mutations:{
        updateCount(state,payload){
            state.count+=payload.add
        }
    }

});

export default store