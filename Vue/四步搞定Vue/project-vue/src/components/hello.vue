<template>
  <div>
    hello
    <div v-for="item in shopList">
      <button @click="changCont()">-</button>
       <span>{{item.count}}</span>
       <button @click="changCont()">+</button>
    </div>
  </div>
</template>

<script>
export default {
  //只能在本组件被改变
  data() {
      return {
          shopList: this.$store.state.shopList
      }
  },
  methods: {
    changCont() {
      this.$store.commit("updateCount", { add: 5 });
    }
  },
  computed: {
    m() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>
</style>