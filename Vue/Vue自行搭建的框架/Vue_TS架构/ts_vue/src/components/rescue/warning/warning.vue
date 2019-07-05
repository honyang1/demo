<template>
  <div class="warning-wrap">
    <div class="title">报警信息</div>
    <el-scrollbar class="section">
      <div v-for="(item,index) in Data" :key="index" class="warningSub">
        <div :class="index===0?'w':'w1'" class="w">{{item.content}}</div>
        <div :class="index===0?'wSub':'wTxt'" class="wSub">{{item.datetime}}</div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="sass" scoped>@import './warning.scss';</style>

<script lang="ts" src="./warning.ts"></script>
