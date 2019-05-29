<template>
  <header class="header" >
      <h1>todos</h1>
      <input class="new-todo" placeholder="请输入内容" @keydown="dowHandle" />
  </header>
</template>
<script>
  export default {
    name: 'todoHeader',
    methods: {
      dowHandle() {
        console.log('直接通知兄弟 content');
        //发布事件 所有组件共有的一个对象，对象身上有on emit 
        //新创建一个 new Vue 也可以使用根实例
        //this.$emit()//只能通知父组件


        this.$root.$emit('add-todo','新添加的');
        // this.$eventBuds.$emit('add-todo','新添加的');
        
      }
    },
  }
</script>
