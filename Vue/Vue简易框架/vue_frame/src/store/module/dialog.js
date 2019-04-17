export default {
    state: {
        dialog_formDatas: null//定义一个变量 以文件名为开头
    },

    mutations: {
        Update_State(state, obj) {// 改变state里面对应key值的方法  data={obj:'',obj:[]}
            state[obj.key] = obj.data;
        }
    }
}