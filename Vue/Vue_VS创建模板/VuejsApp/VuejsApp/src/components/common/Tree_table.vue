<template>
  <div>
    <!-- @row-click="toggleExpanded" -->
    <el-table :data="formatData" :row-class-name="showRow" v-bind="$attrs">
      <!-- 插槽 -->
     <slot name="sequence"/>
      <el-table-column v-if="columns.length===0" width="150">
        <template slot-scope="scope">
          <span v-for="space in scope.row._level" :key="space" class="ms-tree-space"/>
          <span v-if="iconShow(0,scope.row)" class="tree-ctrl">
            <i v-if="!scope.row._expanded" class="el-icon-caret-bottom"/>
            <i v-else class="el-icon-caret-right"/>
          </span>
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column
        v-for="(column, index) in columns"
        v-else
        :key="column.value"
        :label="column.text"
        :width="column.width"
      >
        <template slot-scope="scope">
          <span
            v-for="space in scope.row._level"
            v-if="index === 0 "
            :key="space"
            class="ms-tree-space"
          />
          <span
            v-if="iconShow(index,scope.row)"
            class="tree-ctrl"
            @click="toggleExpanded(scope.$index)"
          >
            <i v-if="scope.row._expanded" class="el-icon-caret-bottom"/>
            <i v-else class="el-icon-caret-right"/>
          </span>
          {{ scope.row[column.value] }}
        </template>
      </el-table-column>
      <!-- 插槽 -->
      <slot name="tail"/>
    </el-table>
  </div>
</template>

<script>
import treeToArray from "../../utils/eval";
export default {
  props: {
    /* eslint-disable */
    data: {//数据
      type: [Array, Object],
      required: true
    },
    columns: {//表格的列名值
      type: Array,
      default: () => []
    },
    evalFunc: Function,//解析函数 不提供，将使用默认的evalFunc
    evalArgs: Array,//解析函数的参数，是一个数组
    expandAll: {//是否全部展开 默认false
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 格式化数据源
    formatData: function() {
      debugger;
      let tmp;
      if (!Array.isArray(this.data)) {
        tmp = [this.data];
      } else {
        tmp = this.data;
      }
      const func = this.evalFunc || treeToArray;
      const args = this.evalArgs
        ? Array.concat([tmp, this.expandAll], this.evalArgs)
        : [tmp, this.expandAll];
      return func.apply(null, args);
    }
  },
  methods: {
    showRow: function(row) {
      //递归算法
      let recursion = function(obj) {
        if (obj.parent) {
          if (obj.parent._expanded && obj.parent._show) {
            recursion(obj.parent);
          } else {
            return false;
          }
        }
      };

     let show =true;
      if (row.row.parent) {
        let _isShow = recursion(row.row.parent);
        if(!_isShow && _isShow!==undefined){
            show=_isShow
        }else{
           show= row.row.parent._expanded?true:false;
        }
        
      }

    
      row.row._show = show;
      return show ? "RowsShow" : "RowsHide";
    },
    toggleExpanded: function(trIndex) {
      const record = this.formatData[trIndex];
      record._expanded = !record._expanded;
    },
    iconShow(index, record) {
      // 图标显示
      return index === 0 && record.list && record.list.length > 0;
    }
  }
};
</script>
<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: 18px;
  height: 14px;
}
.ms-tree-space::before {
  content: "";
}
.processContainer {
  width: 100%;
  height: 100%;
}
table td {
  line-height: 26px;
}
.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: #2196f3;
  margin-left: -18px;
}
.RowsHide {
  display: none;
}
.RowsShow {
  animation: treeTableShow 1s;
  -webkit-animation: treeTableShow 1s;
}
</style>

