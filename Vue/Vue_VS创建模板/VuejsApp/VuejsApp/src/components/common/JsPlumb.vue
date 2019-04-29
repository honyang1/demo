<template>
  <div>
    <section class="plumb_tool">
      <div class="plumb_control draggable">控件</div>
    </section>
    <div id="plumb_content" class="plumb_content">
      <div
        class="plumb_assembly"
        v-for="item in nodeList"
        :class="item.class"
        :id="item.id"
        :style="{left:item.left+'px',top:item.top+'px'}"
      >{{item.name}}</div>

      <!-- <div id="ax123" class="plumb_assembly plumb_control" style="left: 150px; top: 50px;">开始</div> -->
    </div>
  </div>
</template>
<script>
//npm i jsplumb -S
//npm install jquery --save-dev
//npm install webpack-jquery-ui
import $ from "jquery";
require("webpack-jquery-ui");
import jsplumb from "jsplumb";

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
        },
        {
          id: "ax1234", //唯一标识id
          name: "开始2", //名称
          top: 150, //顶部距离
          left: 250, //左侧距离
          class: "plumb_control" //选择区域的组件
        }
      ],
      plumb_config: {
        top_left: 10 //移动偏差值
      },
      rol: {}//全局控件变量4
     
    };
  },
  watch: {
    nodeList: {
      //深度监听数据
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        debugger;
        const that = this;
        if (oldValue !== undefined && oldValue.length > 0) {
          this.$nextTick(function() {
            debugger;
            that.Rendering_Plumb(newValue);
          });
        }
      }
    },
    rol(newValue, oldValue) {
      this.Rendering_Plumb(this.nodeList);
    }
  },
  methods: {
    init() {
      let vm = this;
      jsPlumb.ready(function() {
        vm.rol = jsPlumb.getInstance();
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
    },
    DataLoading() {
      //数据装载
      this.nodeList();
    },
    AddData(event, ui) {
      //左侧拖动到画布内
      //计算容器距离顶部和左侧的距离
      let Rtop = document.getElementById("plumb_content").offsetTop;
      let Rleft = document.getElementById("plumb_content").offsetLeft;
      //往data内添加数据
      let left = ui.offset.left - Rleft + this.plumb_config.top_left;
      let top = ui.offset.top - Rtop + this.plumb_config.top_left;
      let className = ui.draggable[0].classList[0];
      let name = ui.draggable[0].innerText;
      this.nodeList.push({
        name,
        top,
        left,
        class: className,
        id: "plumb" + this.nodeList.length
      });
    },
    Rendering_Plumb(data) {
      debugger;
      //渲染组件
      let vm = this;
      data.forEach(element => {
        vm.rol.addEndpoint(element.id, {
          anchors: "Top",
          isSource: true,
          isTarget: true
        }); //添加
        vm.rol.addEndpoint(element.id, {
          anchors: "Right",
          isSource: true,
          isTarget: true
        });
        vm.rol.addEndpoint(element.id, {
          anchors: "Bottom",
          isSource: true,
          isTarget: true
        });
        vm.rol.addEndpoint(element.id, {
          anchors: "Left",
          isTarget: true,
          isSource: true
        });
        vm.rol.draggable(element.id, {
          containment: "parent" //不能拖动超过父容器
        });
      });
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