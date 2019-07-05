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
  </div>
</template>

<style>
@import './${dirName}.scss';
</style>
<script lang="ts" src="./${dirName}.ts"></script>
`;

// ts 模版
const tsTep = `import { Component, Vue } from "vue-property-decorator"
import * as Type from "@/types/rescue/receptionCenter.interface"
import { Action } from "vuex-class"
import { commonApi } from '@/config/api';
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  //@State appCode: any
  // data: ${capPirName}Data = {
  //   pageName: '${dirName}'
  // }

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
@Action login: any
/* @State Login: any  Login ===  （modules: { Login }）访问子集的时候用继承的名字，直接拿出子集的所有集合 */
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
const interfaceTep = ` 
/* ${dirName}.Data 参数类型 */
export interface ${capPirName}Data {
  pageName: string
}
/* VUEX ${dirName}.State 参数类型 */
export interface ${capPirName}State {
  [key: string]: any
}

/* 接口请求参数类型 -  */
// export interface ${capPirName}Req {
//   id?: string,                    /* id查询 */
// }

/* 接口接收参数类型 -  */
// export interface ${capPirName}Ret {
//   id?: string,          /* 主键ID */
// }
`;


// api 接口模版
// const apiTep = `import base from '@/config/base';
// import $ from '@/utils/http';
// /* 登陆 */
// // export const login = (data: any) => {
// //     return $.Ajax({ url: base.commonBase + '/api/Account/Login', method: 'POST', params: { ...data } }, true);
// // }
// `;

const storeTep = `
import {${capPirName}State, ${capPirName}Req } from '@/types/${dirName}.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
// import { ${capPirName}Api } from '@/config/api';

const state: ${capPirName}State = {
  autor?: string
}

// 强制使用getter获取state
const getters: GetterTree<${capPirName}State, any> = {
    
}

// 更改state
const mutations: MutationTree< ${capPirName}State> = {
    // 更新state都用该方法
    UPDATE_STATE(state:  ${capPirName}State, data:  ${capPirName}State) {
        for (let key in data) {
            if (!data.hasOwnProperty(key)) { return }
            state[key] = data[key]
        }
    }
}

const actions: ActionTree< ${capPirName}State, any> = {
    /* 更改state */
    updateState({ commit, state:  ${capPirName}State }, data:  ${capPirName}State) {
        commit('UPDATE_STATE', data)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
`;

fs.mkdirSync(`${basePath}/views/rescue/${dirName}`); // mkdir

process.chdir(`${basePath}/views/rescue/${dirName}`); // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep); // vue
fs.writeFileSync(`${dirName}.ts`, tsTep); // ts
fs.writeFileSync(`${dirName}.scss`, scssTep);

process.chdir(`${basePath}/types/rescue`);
fs.writeFileSync(`${dirName}.interface.ts`, interfaceTep); // interface

// process.chdir(`${basePath}/config/api`); // cd api
// fs.writeFileSync(`${dirName}.ts`, apiTep); // api

process.chdir(`${basePath}/store/rescue`);
fs.writeFileSync(`${dirName}.ts`, storeTep); // api
// fs.mkdirSync(`${basePath}/types/${dirName}`); // mkdir
process.exit(0);
