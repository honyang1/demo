<template>
  <div>
    <label v-if="label">{{label}}</label>
    <!-- input 占位符 -->
    <slot></slot>
    <!-- 错误信息展示 -->
    <p v-if="error" style="color:red">{{error}}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
import { error, debug } from 'util';

export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      error: ""
    };
  },
  mounted() {
    //监听校验事件
    this.$on("validate", this.validate);
  },
  methods: {
    validate() {
      //执行具体的校验工作
      // 1 获取校验规则
      const rules = this.form.rules[this.prop];
      //2 获取数据模型
      const value = this.form.model[this.prop];
      //3 校验对象
      const descriptor={[this.prop]:rules}
      //4 创建检验器
      const schema=new Schema(descriptor)
      //校验
      schema.validate({[this.prop]:value},errors=>{
      debugger;
        if (errors) {
          this.error=errors[0].message;
        }else{
          this.error='';
        }
      });
    }
  }
};
</script>

<style scoped>
</style>