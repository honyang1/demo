<template>
  <el-form ref="form" :model="form" label-width="120px" label-position="right">
    <span>基础信息3</span>
    <el-divider></el-divider>
    <el-row>
      <el-form-item label="企业名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-row>
    <el-row>
      <el-form-item label="活动名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="活动名称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="活动名称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="成立时间：">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;" ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="活动性质：">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button class="step_btn" type="primary" @click="next">下一步</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  props: {
    cangshu: {
      type: Number
    }
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      form2: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  computed: {
    name() {
      return this.data 
    }
  },
  methods: {
    next() {
      // var a= this.$app.Com.compreObj(this.form ,this.form2)
      // alert(a);
      this.$emit("next");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>