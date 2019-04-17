<template>
  <i-table :tableKey="tableKey" :tablep="tablep"></i-table>
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
        { name: "用户名", value: "name" },
        { name: "时间", value: "date" },
        { name: "地址", value: "address" }
      ],
      tablep: {
        url: "/api/Interface/Leaving/GetLeaving",
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var that = this;
      var urlPage = that.$route.query.page;
      if (urlPage) {
        that.page = urlPage;
      }
      
      this.$api.get("/api/Interface/Leaving/GetLeaving", null, r => {});
    }
  },
  watch: {
    $route(to, from) {
      this.list = [];
      this.isShow = true;
      this.page = to.query.page;
      this.getData();
    }
  }
};
</script>