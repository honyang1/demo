<template>
  <div>
    <el-container>
      <!-- 表格 -->
      <el-main>
        <tree_table :columns="columns" :data="data">
          <el-table-column type="selection" width="55" slot="sequence"></el-table-column>

          <el-table-column label="操作" slot="tail">
            <template slot-scope="scope">
              <el-button size="mini" @click="dialogFormVisible=true">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </tree_table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import tree_table from "../../components/common/Tree_table.vue";
export default {
  components: {
    tree_table
  },
  data() {
    return {
      columns: [
        {
          text: "事件",
          value: "event",
        },
        {
          text: "ID",
          value: "id"
        },
        {
          text: "时间线",
          value: "timeLine"
        },
        {
          text: "备注",
          value: "comment"
        }
      ],
      data: [
        {
          id: 0,
          event: "事件1",
          timeLine: 50,
          comment: "无"
        },
        {
          id: 1,
          event: "事件1",
          timeLine: 100,
          comment: "无",
          _expanded:true,//是否展开
          list: [
            {
              id: 2,
              event: "事件2",
              timeLine: 10,
              comment: "无"
            },
            {
              id: 3,
              event: "事件3",
              timeLine: 90,
              comment: "无",
              list: [
                {
                  id: 4,
                  event: "事件4",
                  timeLine: 5,
                  comment: "无"
                },
                {
                  id: 5,
                  event: "事件5",
                  timeLine: 10,
                  comment: "无"
                },
                {
                  id: 6,
                  event: "事件6",
                  timeLine: 75,
                  comment: "无",
                  list: [
                    {
                      id: 7,
                      event: "事件7",
                      timeLine: 50,
                      comment: "无",
                      list: [
                        {
                          id: 71,
                          event: "事件71",
                          timeLine: 25,
                          comment: "xx"
                        },
                        {
                          id: 72,
                          event: "事件72",
                          timeLine: 5,
                          comment: "xx"
                        },
                        {
                          id: 73,
                          event: "事件73",
                          timeLine: 20,
                          comment: "xx"
                        }
                      ]
                    },
                    {
                      id: 8,
                      event: "事件8",
                      timeLine: 25,
                      comment: "无"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 20,
          event: "事件1",
          timeLine: 20,
          comment: "无"
        }
      ]
    };
  },
  methods: {
    handleDelete(index, row) {
     debugger;
    }
  }
};
</script>

<style>
</style>