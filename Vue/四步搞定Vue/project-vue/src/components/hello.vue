<template>
  <div>
    hello
    <div :key="item.id" v-for="item in shopList">
      <button @click="reduce(item.id)">-</button>
       <span>{{item.count}}</span>
       <button @click="add(item.id)">+</button>
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
    add(id) {
      this.$store.commit("updateCountById", { id });
    },
    reduce(id){
      this.$store.commit("reduceCountById", { id });
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