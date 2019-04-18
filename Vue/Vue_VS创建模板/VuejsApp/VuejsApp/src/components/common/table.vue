<template>
  <div>
    <el-table :data="tableData" border height="250">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
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
</template> 
<style>
::-webkit-scrollbar {
  width: 16px; /*滚动条宽度*/
  height: 16px; /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px; /*滚动条的背景区域的圆角*/
  background-color: red; /*滚动条的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px; /*滚动条的圆角*/
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: green; /*滚动条的背景颜色*/
}
</style>

<script>
export default {
  name: "mytable",
  data() {
    return {
      tableData: [],
      currentPage: this.tablep.currentPage, //第几页
      pageSize: this.tablep.pageSize, //显示的条数
      total: 0
    };
  },
  props: ["tableKey", "tablep"],
  created() {
    this.tableChang();
  },
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
      this.$Ajax(
        {
          url: this.tablep.url,
          params: {
            pageSize: this.pageSize,
            current: this.currentPage
          },
          loadingType: false
        },
        r => {
          //测试用例
          this.total = 41;
          this.tableData = r.data;
          // this.total = r.data.total;
          // this.tableData = JSON.parse(JSON.stringify(r.data.list));
        }
      );
    }
  }
};
</script>
