<template>
  <div>
    <div class="div" v-drag.limit></div>
    <div class="div2" v-drag></div>
  </div>
</template>

<script>
export default {
  directives: {
    drag: {
      bind(el, binding) {
        // console.log("绑定");
        //当前指令绑定的dom元素
        // console.log(el);
        //指令传入的参数，修饰符，值 v-指令名称：参数.修饰符=值
        //binding
        console.log(binding);

        el.onmousedown = function(e) {
          var disX = e.clientX - el.offsetLeft;
          var disY = e.clientY - el.offsetTop;
          document.onmousemove = function(e) {
            let L = e.clientX - disX;
            let T = e.clientY - disY;
            if (binding.modifiers.limit) {
              if (L < 0) L = 0;
            }
            el.style.left = L + "px";
            el.style.top = T + "px";
          };

          document.onmouseup = function() {
            document.onmousemove = null;
          };
        };
      }
    }
  }
};
</script>

<style  scoped>
.div {
  position: absolute;
  width: 100px;
  height: 100px;
  background: red;
  left: 0;
  top: 0;
}
.div2 {
  position: absolute;
  width: 100px;
  height: 100px;
  background: green;
  left: 300px;
  top: 0;
}
</style>