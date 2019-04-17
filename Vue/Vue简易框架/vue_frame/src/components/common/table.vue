<template>
  <div>
    <el-table :data="tableData" :default-sort="{prop:tableProp , order: tableOrder}" border>
      <el-table-column
        v-for="(item,key) in tableKey"
        :key="key"
        :prop="item.value"
        :label="item.name"
      ></el-table-column>
    </el-table>
    <el-pagination
      name="fenye"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template> <script>
export default {
  name: "mytable",
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      tableProp: this.tablep.prop,
      tableOrder: this.tablep.order,
      sort: 1,
      total: 0
    };
  },
  props: ["tableKey", "tablep"],
  methods: {
    //修改每页条数触发
    handleSizeChange(val) {
      this.currentPage = 1;
      this.pageSize = val;
      this.tableChang();
    },
    //翻页触发
    handleCurrentChange(val) {
      this.currentPage = val;
      this.tableChang();
    },
    //更新table数据
    tableChang() {
      this.$api.get(
        "/api/Interface/Leaving/GetLeaving",
        {
          pageSize: this.pageSize,
          current: this.currentPage
        },
        r => {
          debugger;
          this.total = 11;
          let a = [
            {
              date: "2016-05-02",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄"
            },
            {
              date: "2016-05-04",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1517 弄"
            },
            {
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄"
            },
            {
              date: "2016-05-03",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1516 弄"
            }
          ];
          this.tableData = JSON.parse(JSON.stringify(a));
        }
      );
    }
  }
};
</script>
