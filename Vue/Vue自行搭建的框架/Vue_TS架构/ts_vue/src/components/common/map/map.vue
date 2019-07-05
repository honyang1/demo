<template>
  <div class="map-wrap">
    <el-dialog class="acceptDialog" :visible.sync="dialog.visible" width="1000px">
      <button @click="close" type="button" aria-label="Close" class="el-dialog__headerbtn">
        <i class="el-dialog__close el-icon el-icon-close"></i>
      </button>
      <el-form label-width="80px" v-if="dialog.isQuery">
        <el-col :span="9">
          <el-form-item label="请输入关键字：" label-width="120px">
            <el-input v-model="dialog.form.name" id="likeInput"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="经度：">
            <el-input v-model="dialog.form.lng"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="纬度：">
            <el-input v-model="dialog.form.lat"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3" class="align">
          <el-button @click="callback" type="primary" class="btn">确定</el-button>
        </el-col>
      </el-form>
      <div id="container" class="mymap"></div>
    </el-dialog>
  </div>
</template>

<style lang="sass" scoped>@import './map.scss';</style>

<script lang="ts" src="./map.ts"></script>
