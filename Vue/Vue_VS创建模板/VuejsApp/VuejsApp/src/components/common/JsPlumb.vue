<template>
  <div>
    <section class="plumb_tool">
      <div class="plumb_control draggable">控件</div>
    </section>
    <section id="plumb_content" class="plumb_content">
      <!-- <div
        class="plumb_assembly"
        v-for="item in nodeList"
        :class="item.class"
        :id="item.id"
        :style="{left:item.left+'px',top:item.top+'px'}"
      >{{item.name}}</div> -->

      <div id="ax123" class="plumb_assembly plumb_control" style="left: 150px; top: 50px;">开始</div>
    </section>
  </div>
</template>
<script>
//npm i jsplumb -S
//npm install jquery --save-dev
//npm install webpack-jquery-ui
import $ from "jquery";
require("webpack-jquery-ui");
import jsplumb_rol from "jsplumb";

const jsplumb=jsplumb_rol;

export default {
  data() {
    return {
      nodeList: [
        {
          id: "ax123", //唯一标识id
          name: "开始", //名称
          top: 50, //顶部距离
          left: 150, //左侧距离
          class: "plumb_control" //选择区域的组件
        }
      ],
      plumb_config: {
        top_left: 10 //移动偏差值
      }
    };
  },
  watch: {
    nodeList: {
      //深度监听数据
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.$nextTick(function() {
          // jsPlumb.addEndpoint("123", {
          //   uuid: 1,
          //   anchor: "TopCenter",
          //   isSource: true
          // });
         
        });
      }
    }
  },
  methods: {
    init() {
      let vm = this;
     let vh= jsPlumb.ready(function() {
        jsPlumb.setContainer("plumb_content"); //容器
        $(".draggable").draggable({
          //设置可拖动
          helper: "clone",
          scope: "control"
        });

        $("#plumb_content").droppable({
          //拖动到指定内容内事件处理
          scope: "control",
          drop: function(event, ui) {
            vm.AddData(event, ui); //往data内添加数据
          }
        });
      });

       vh.addEndpoint("ax123");
    },
    DataLoading() {
      //数据装载
      this.nodeList();
    },
    AddData(event, ui) {
      //计算容器距离顶部和左侧的距离
      let Rtop = document.getElementById("plumb_content").offsetTop;
      let Rleft = document.getElementById("plumb_content").offsetLeft;
      //往data内添加数据
      let left = ui.offset.left - Rleft + this.plumb_config.top_left;
      let top = ui.offset.top - Rtop + this.plumb_config.top_left;
      let className = ui.draggable[0].classList[0];
      let name = ui.draggable[0].innerText;
      this.nodeList.push({ name, top, left, class: className });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style >
.plumb_tool {
  width: 100px;
  height: 100%;
  float: left;
}
.plumb_control {
  width: 80px;
  height: 25px;

  background: #a95f5fee;
  border-radius: 5px;
  z-index: 1;
}
.draggable {
  margin: 10px;
}

.plumb_content {
  width: calc(100% - 100px);
  min-height: 300px;
  float: left;
  background: #eae25c;
  position: relative;
}

.plumb_assembly {
  position: absolute;
}
</style>