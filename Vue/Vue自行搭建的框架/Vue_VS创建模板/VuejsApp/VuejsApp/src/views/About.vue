<template>
  <div class="about">
    <!-- <h1>This is an about page</h1>
    <p>userid:{{userid}} params</p>
    <p>userid:{{userid2}} query</p>
    <input v-model="text">
    <p>{{text}}</p>
    <button @click="submint">点击</button>
    <p v-if="bool">if判断显示</p> -->
    <plumb></plumb>
  </div>
</template>


<script>
import { JsPlumb } from "../components/index.js";
export default {
  components: {
    plumb: JsPlumb
  },
  data() {
    return {
      userid: "1",
      userid2: "2",
      text: "3",
      bool: false
    };
  },
  created() {
    //页面渲染之前
  },
  mounted() {
    //之后
    // 将数据提交到 store
    this.userid = this.$route.params.userid;

    this.userid2 = this.$route.query.userid;
  },
  methods: {
    submint: function() {
      alert("绑定提交事件");
      this.bool = true;
    }
  }
};
</script>
