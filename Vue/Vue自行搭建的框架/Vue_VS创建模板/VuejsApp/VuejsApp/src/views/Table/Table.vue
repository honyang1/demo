<template>
  <div>
    <el-container>
      <el-header style="height:auto">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="90px">
          <el-row :gutter="20">
            <el-col :span="4.5">
              <el-form-item label="审批人:">
                <el-input v-model="formInline.user" placeholder="审批人" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4.5">
              <el-form-item label="活动区域：">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4.5">
              <el-form-item label="活动区域：">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4.5">
              <el-form-item label="活动区域：">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4.5">
              <el-form-item label="审批人:">
                <el-input v-model="formInline.user" placeholder="审批人" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4.5">
              <el-form-item label="活动区域：">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4.5">
              <el-form-item label="活动区域：">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10.5">
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button type="success">添加</el-button>
                <el-button type="danger" >批量删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-header>

      <!-- 表格 -->
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column type="index" width="50" label="序号"></el-table-column>
          <el-table-column label="日期">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓名">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="dialogFormVisible=true">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
          style="float:right"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-size="10"
          layout="total,prev, pager, next, jumper"
          :total="40"
        ></el-pagination>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
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
      ],
      currentPage4: 2, //页码
      formLabelWidth: "120px",
      dialogFormVisible: false
    };
  },
  methods: {
    handleEdit() {
      //console.log(index, row);
    },
    handleDelete() {
      //console.log(index, row);
    },
    handleSizeChange() {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange() {
      //console.log(`当前页: ${val}`);
    },
    onSubmit() {},
    Refresh() {
      //  console.log(v);
    }
  }
};
</script>

<style>
</style>