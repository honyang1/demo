<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" label-position="right">
      <span>基础信息</span>
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
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
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

      <span>企业资质</span>
      <el-divider></el-divider>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
      >
        <i class="el-icon-plus"></i>
         <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form>
  </div>
</template>


<script>
export default {
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
      }
    };
  },
  methods: {
    name() {
      
    }
  },

};
</script>

<style >
</style>