/*
 *  页面快速生成脚本
 */
const fs = require("fs");
const path = require("path");
const basePath = path.resolve(__dirname, "../src");

const dirName = process.argv[2];
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);
if (!dirName) {
  console.log("文件夹名称不能为空！");
  console.log("示例：npm run tep ${capPirName}");
  process.exit(0);
}

/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <div class="${dirName}-wrap">
    {{data.pageName}}
  </div>
</template>

<style>
@import './${dirName}.scss';
</style>
<script lang="ts" src="./${dirName}.ts"></script>
`;

// ts 模版
const tsTep = `import { Component, Vue } from "vue-property-decorator"
import { ${capPirName}Data } from './${dirName}.interface'
import { ${dirName}Api } from '@/config/api';
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // data
  data: ${capPirName}Data = {
    pageName: '${dirName}'
  }

  created() {
    //
  }
  /* 
    keep-alive if (!this.$route.meta.isBack || this.isFirstEnter) {
    this.initData() // 这里许要初始化dada()中的数据
    this.getDataFn() // 这里发起数据请求，（之前是放在created或者mounted中，现在只需要放在这里就好了，不需要再在created或者mounted中请求！！）
  }
  this.$route.meta.isBack = false //请求完后进行初始化
  this.isFirstEnter = false;//请求完后进行初始化
*/
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
    
}
`;

// scss 模版
const scssTep = `
.${dirName}-wrap {
  width: 100%;
}
`;

// interface 模版
const interfaceTep = `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  pageName: string
}
// VUEX ${dirName}.State 参数类型
export interface ${capPirName}State {
  author?: string
}
// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}
`;


// api 接口模版
const apiTep = `import basse from './base';
import $ from '@/utils/http';

/*  */
export const getData = (data: any) => {
    return $.Ajax({ url: basse.sosBase + '', method: 'GET', ...data });
}

`;

fs.mkdirSync(`${basePath}/views/${dirName}`); // mkdir

process.chdir(`${basePath}/views/${dirName}`); // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep); // vue
fs.writeFileSync(`${dirName}.ts`, tsTep); // ts
fs.writeFileSync(`${dirName}.scss`, scssTep);
fs.writeFileSync(`${dirName}.interface.ts`, interfaceTep); // interface

fs.mkdirSync(`${basePath}/config/${dirName}Api`);
process.chdir(`${basePath}/config/${dirName}Api`); // cd api
fs.writeFileSync(`${dirName}.ts`, apiTep); // api
process.exit(0);
