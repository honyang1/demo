import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// vuex 中的状态是响应式的

//mock数据
const shopList=[{
    id:123,
    count:2
},{
    id:456,
    count:3
}];
let store = new Vuex.Store({
    state:{
        shopList//定义一个状态
    },
    mutations:{
        updateCount(state,payload){
            state.count+=payload.add
        }
    }

});

export default store