<template>
  <div>
    <h2>我是一个组件</h2>
    <p>{{$store.state.count}}</p>
    <button @click="ChangeCount">改变状态</button>
  </div>
</template>

<script>
export default {
  methods: {
    ChangeCount() {
      this.$store.commit('updateCount',{add:10})
    }
  },
};
</script>

<style lang="scss" scoped>
</style>