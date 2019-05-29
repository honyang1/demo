<template>
  <section class="main">
    <input class="toggle-all" type="checkbox" />
    <ul class="todo-list">
        <li>
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>miaoweiketang</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" />
        </li>
    </ul>
  </section>
</template>
<script>
export default {
  created(){
    this.$root.$on('add-todo',(value)=>{
      console.log("找到了",value);
    })
    // this.$eventBuds.$on('add-todo',(value)=>{
    //   console.log("找到了",value);
    // })
  }
}
</script>

