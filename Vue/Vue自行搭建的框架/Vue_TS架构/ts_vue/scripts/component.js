/*
 * @Description: 组件快速生成脚本
 * @Date: 2018-12-06 10:26:23
 * @LastEditTime: 2018-12-10 09:44:19
 */

const fs = require("fs");
const path = require("path");
const basePath = path.resolve(__dirname, "../src");

const dirName = process.argv[2];
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);
if (!dirName) {
  // eslint-disable-next-line no-console
  console.log("文件夹名称不能为空！");
  // eslint-disable-next-line no-console
  console.log("示例：npm run com ${capPirName}");
  process.exit(0);
}

/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <div class="${dirName}-wrap">
    {{data.componentName}}
  </div>
</template>

<style lang="sass" scoped>@import './${dirName}.scss';</style>

<script lang="ts" src="./${dirName}.ts"></script>
`;

// ts 模板
const tsTep = `import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { ${capPirName}Data } from "@/types/components/rescue/${dirName}.interface";
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // prop
  @Prop() data!: string;
  created() { }
  activated() {
    //
  }
  mounted() {
    //
  }
}
`;

// interface 模版
const interfaceTep = `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  componentName: string
}

`;

const scssTep = `
.${dirName}-wrap {
  width: 100%;
}
`;

fs.mkdirSync(`${basePath}/components/common/${dirName}`); // mkdir

process.chdir(`${basePath}/components/common/${dirName}`); // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep); // vue
fs.writeFileSync(`${dirName}.scss`, scssTep);
fs.writeFileSync(`${dirName}.ts`, tsTep);

process.chdir(`${basePath}/types/components/common`); // cd components
fs.writeFileSync(`${dirName}.interface.ts`, interfaceTep); // interface

process.exit(0);
