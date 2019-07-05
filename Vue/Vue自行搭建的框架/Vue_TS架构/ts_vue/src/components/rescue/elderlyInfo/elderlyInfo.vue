<template>
  <div class="elderlyInfo-wap">
    <div class="image">
      <img src="../../../assets/Image/rescue/top1.png">
    </div>
    <div class="info">
      <div class="ul">
        <div class="li">
          <i class="i i1"></i>
          {{PrivData.elderlyInfo.name}}
        </div>
        <div class="li">
          <i class="i i2"></i>
          {{PrivData.elderlyInfo.sex}}
        </div>
        <div class="li">
          <i class="i i3"></i>
          {{PrivData.elderlyInfo.age}}岁
        </div>
        <div class="li">
          <i class="i i4"></i> 小康
        </div>
        <div class="li">
          <i class="i i5"></i> 独居
        </div>
        <div class="li">
          <i class="i i6"></i>
          {{PrivData.elderlyInfo.address}}
        </div>
      </div>
      <div class="label">
        <div class="labelSub" style>
          <div class="bg bg1">健康 病史</div>
          <div v-for="(item,index) in PrivData.elderlyInfo.healthInfo" :key="index" class="text">{{item}}</div>
          <div v-if="PrivData.isShowDown" class="down"></div>
        </div>
        <!--  <div class="labelSub">
          <div class="bg bg2">生活 习惯</div>
          <div class="text">唱京剧</div>
          <div class="text">读报</div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import './elderlyInfo.scss';
</style>

<script lang="ts" src="./elderlyInfo.ts"></script>

