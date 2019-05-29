<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rule"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row v-for="(items,index) in json" :key="index">
        <el-form-item :label="items.label" prop="name">
          <el-input v-if="items.type==='input'" v-model="ruleForm[items.key]"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    FormData: {
      type: Array
    }
  },
  data() {
    return {
      json: this.FormData.concat([]),
      ruleForm: {}
    };
  },
  created() {},
  computed: {
    rule() {//获取规则
      let list = {};
      this.FormData.forEach(item => {
        list[item.key] = item.rules;
      });
      return list;
    }
  },
  methods: {
    GetFormData() {//获取from 表单数据
      let that = this;
      this.FormData.forEach(item => {
        that.ruleForm[item.key] = item.value;
      });
    },
    submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
           
          } else {
           
          }
        });
    }
  }
};
</script>

<style >
</style>