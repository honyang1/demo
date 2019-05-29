<template>
  <div id="app">
    <div :style="{backgroundColor:isRed?'Red':''}">改變顔色</div>
    <button @click="isShow=true">登陆</button>
    <p>{{isShow}}</p>
    
    <!-- <Modal :show.sync="isShow" :is-red.sync="isRed" v-show="isShow" title="課堂" ok-value="確定" @clickOk="change"></Modal> -->
    <Modal v-model="isShow" v-show="isShow" title="課堂" ok-value="確定"  ></Modal>
  </div>
</template>

<script>
import Modal from "./components/modal.vue";
import { debuglog } from 'util';

export default {
  name: "app",
  data() {
    return {
      isRed:true,
      isShow:false//隐藏状态
    }
  },
  components: {
    Modal
  },
  methods: {
    change(){
      this.isRed=!this.isRed;
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
