import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// vuex 中的状态是响应式的

//mock数据
const shopList = [{
    id: 123,
    count: 2
}, {
    id: 456,
    count: 3
}];
let store = new Vuex.Store({
    state: {
        shopList //定义一个状态
    },
    getters: {
        totals(state) {
            return state.shopList.reduce((n, item) => n + item.count, 0);
        }
    },
    mutations: {
        updateCountById(state, payload) {

            let itm = state.shopList.find(item => item.id === payload.id);
            itm.count += 1;
        },
        reduceCountById(state, payload) {
            let item = state.shopList.find(item => item.id === payload.id);
            item.count -= 1;
        }
    }

});

export default store