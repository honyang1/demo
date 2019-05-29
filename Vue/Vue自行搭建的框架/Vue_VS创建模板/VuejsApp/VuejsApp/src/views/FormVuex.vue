<template>
  <div class="parent">
    <h3>问卷调查</h3>
    <child></child>
    <!-- 注意： 这里已经没有 .sync 了 -->
    <div >
      <br>
      <br>
      <p>数据：{{_fatherData}}</p>
    </div>
    <button @click="Clike_href">带参数跳转1(参数为123)</button>
    <button @click="Clike_href2">带参数跳转2(参数为123)</button>
    <button @click="Click_Isnull">判断是否为空</button>
  </div>
</template>

<script>
import {child} from "../components/index";

export default {
  components: {
    child
  },
  data: function() {
    return {
      form: {
        name: "",
        namePla: "姓名不能为空",
        address: "",
        age: ""
      }
    };
  },
  computed: {
    //挂载完成后
    _fatherData() {
      //获取全局 store 仓库中的 formDatas 值
      // 读取store里面的值，这里是重点
      return this.$store.state.dialog.dialog_formDatas;
    }
  },
  methods: {
    Clike_href() {
      //带参跳转页面
      this.$router.replace({ name: "about", params: { userid: 123 } });
    },
    Clike_href2() {
      //router.go(n)  这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)
      //router.push(location)  想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
      //router.replace(location)  //跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录
      this.$router.push({ name: "about", query: { userid: 123 } });
    },
    Click_Isnull() {
      let a = "";
      if (this.$app.Com.IsNull(a)) {
        this.$message.error('错了哦，这是一条错误消息');
      }
    }
  }
};
</script>