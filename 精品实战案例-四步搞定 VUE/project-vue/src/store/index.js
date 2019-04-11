import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        count:110//定义一个状态
    }

});

export default store