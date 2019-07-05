<template>
  <div>
    <el-container>
      <el-header>
        <img src="@/assets/Image/main/logo_bar@2x.png">
        <div class="title">智慧养老云服务平台</div>
        <div class="right">
          <div class="bg bg1"></div>
          <div class="bg bg2"></div>
          <div class="bg bg3"></div>
          <div class="bg bgimg" style="position:relative">
            <img :src="img">
          </div>
        </div>
      </el-header>
      <el-container class="main-wrap">
        <el-aside>
          <div
            @click="clickMan(item)"
            v-for="item in data"
            :key="item.code"
            :class="activeMain === item.code ?'active':''"
            class="li"
          >
            <div class="icon">
              <i :class="item.imgSrc" class="iconfont"></i>
            </div>
            <div class="txt">{{item.name}}</div>
            <!-- 二级列表 -->
            <div v-show="activeTwoMain === item.code && item.menuDtos.length > 0" class="liTwo">
              <div  @click="clickTwoMenu(itm,$event)" v-for="itm in item.menuDtos" :key="itm.code" :class="selected===itm.code?'active':''"  class="li">
                <div class="icon">
                  <i :class="itm.imgSrc" class="iconfont"></i>
                </div>
                <div class="txt">{{itm.name}}</div>
              </div>
            </div>
          </div>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="sass" scoped>
  @import "./main.scss";
</style>
<script lang="ts" src="./main.ts"></script>
