<template>
  <article class="handle-wrap">
    <!-- 老人信息 -->
    <ElderlyInfo></ElderlyInfo>
    <article class="foot">
      <section class="footLeft">
        <!-- 报警信息 -->
        <div class="warning">
           <Warning :data="warningData"></Warning>
        </div>

        <!-- 处置预案 -->
        <div class="plan">
          <div class="title">处置预案</div>
          <el-scrollbar class="section"></el-scrollbar>
        </div>
      </section>
      <section class="footRight">
        <!-- 任务中心 -->
        <div class="record">
          <div class="title">任务中心</div>
          <div class="section"></div>
        </div>
        <!-- 预案确认 -->
        <div class="comfirm">
          <div class="title">预案确认</div>
          <el-scrollbar class="section">
          
          </el-scrollbar>
        </div>
        <div></div>
      </section>
    </article>
  </article>
</template>

<style lang="sass" scoped>@import './handle.scss';</style>
<script lang="ts" src="./handle.ts"></script>

