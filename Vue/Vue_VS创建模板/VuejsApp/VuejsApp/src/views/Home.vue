<template>
  <div style="overflow: hidden;position:relative">
    <i-table :tableKey="tableKey" :tablep="tablep"></i-table>
  </div>
</template>

<script>
// @ is an alias to /src
import { iTable } from "../components/index.js";

export default {
  name: "home",
  components: {
    iTable
  },
  data() {
    return {
      tableKey: [
        //需要显示的列  name 对应表头列  value：对应的是列显示的名称值
        { name: "用户名", value: "toTag" },
        { name: "时间", value: "datetime" },
        { name: "Id", value: "id" }
      ],
      tablep: {
        //数据访问接口
        url: "/api/Interface/Leaving/GetLeaving",
        currentPage: 1,
        pageSize: 10
      }
    };
  },
  created() {},
  methods: {}
};
</script>