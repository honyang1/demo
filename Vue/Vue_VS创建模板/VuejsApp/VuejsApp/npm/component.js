/*
 * @Description: 组件快速生成脚本
 */
const fs = require("fs");
const path = require("path");
const basePath = path.resolve(__dirname, "../src");

const dirName = process.argv[2];
if (!dirName) {
    // eslint-disable-next-line no-console
    console.log("文件夹名称不能为空！");
    // eslint-disable-next-line no-console
    console.log("示例：npm run tep ${capPirName}");
    process.exit(0);
}

/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <div class="${dirName}-wrap">
    
  </div>
</template>
<style>
</style>

<script >
  // import { iTable } from "../components/index.js" // 组件

  export default {
    //components: {//加载组件
    //    iTable
    //},
    data() {
        return {
          key: value
        }
    },
    //computed: {//计算属性
    //    name() {
    //      return this.data 
    //    }
    //},
    created() {//页面初始化之前
      
    },
    mounted() {//页面初始完成

    },
    methods: {//存放方法

    },
    

  }
</script>

`;

fs.mkdirSync(`${basePath}/views/${dirName}`);
process.chdir(`${basePath}/views/demo`); // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep); // vue

process.exit(0);