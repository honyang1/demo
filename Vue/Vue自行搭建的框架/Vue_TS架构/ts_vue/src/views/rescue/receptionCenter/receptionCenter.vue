<template>
  <div class="hear-wrap">
    <div class="left">
      <div class="title">
        待处理事件
        <span class="num">
          <span class="arrow"></span>
          {{taskList.length}}
        </span>
      </div>
      <section class="sectionTable">
        <dl class="thead">
          <dd>姓名</dd>
          <dd>住址</dd>
          <dd>类型</dd>
          <dd>来源</dd>
          <dd>描述</dd>
          <dd>时间</dd>
          <dd>操作</dd>
        </dl>
        <el-scrollbar class="tbody">
          <dl v-for="item in taskList" :key="item.id">
            <dd>{{item.elderName}}</dd>
            <dd>{{item.elderAddress}}</dd>
            <dd>{{item.taskTypeName}}</dd>
            <dd>{{item.fromTypeName}}</dd>
            <dd>{{item.requestContent}}</dd>
            <dd>{{item.requestTime}}</dd>
            <dd><span class="btnOperation" @click="clickSkip(item.relate,item.id)">处置</span></dd>
          </dl>
        </el-scrollbar>
      </section>
      <section class="section">
        <div class="title">
          处置中事件
          <span class="num">
            <span class="arrow"></span>123
          </span>
          <div class="status">
            <div class="fe">
              <i class="point confirm"></i>
              确认中
            </div>
            <div class="fe">
              <i class="point connect"></i>
              沟通中
            </div>
            <div class="fe">
              <i class="point handle"></i>
              处理中
            </div>
          </div>
        </div>

        <el-scrollbar class="event">
          <article v-for="(item,index) in doingTasks" :key="index">
            <div class="arli">
              <div class="imgContent">
                <img :src="item.taskTypeImg">
                <div class="imgTxt">{{item.taskType}} · {{item.todoTasks.length}}</div>
              </div>
              <div class="ardl">
                <div
                  v-for="(taskName,index) in item.taskSubTypes"
                  :key="index"
                  class="ardd"
                >{{taskName}}</div>
              </div>
            </div>
            <div v-for="itm in item.todoTasks" :key="itm.id" class="arli">
              <div @click="clickDisposal(itm.relate)" class="disposal">
                <div class="top">
                  <div class="dtLeft">
                    {{itm.elderName}}
                    <i></i>
                  </div>
                  <div class="dtRight">
                    <div class="dtdd">
                      <span class="icon"></span>
                      {{itm.taskSubTypeName}}
                    </div>
                  </div>
                </div>
                <div class="middle">
                  <div class="mTxt">
                    <span class="mIcon"></span>
                    描述：{{itm.requestContent}}
                  </div>
                </div>
                <div class="middle bMiddle" style>
                  <div class="mTxt">
                    <span class="bIcon"></span>
                    {{currentTime(itm.requestTime)}}
                  </div>
                  <div class="arrow"></div>
                </div>
              </div>
            </div>
          </article>
        </el-scrollbar>
      </section>
    </div>
    <div class="right">
      <div class="rtdiv">
        <div class="nav">
          <div class="name">鑫松邻里中心</div>
          <div class="icont"></div>
        </div>
        <div class="spot">
          <i></i>
        </div>
      </div>
      <div class="dl">
        <div v-for="item in currentOperator" :key="item.id" class="dd">
          <div class="name">{{item.regionName}}</div>
          <div :class="item.isOnline?'onLine':'notOnLine'" class="icon">
            <i></i>
          </div>
        </div>
      </div>

      <div class="rtdiv">
        <div class="nav">
          <div class="name">养老顾问</div>
          <div class="icont"></div>
        </div>
      </div>
      <div class="adviser">
        <div v-for="item in counselorList" :key="item.id" class="li">
          <div class="img">
            <img :src="item.img">
          </div>
          <div class="name">
            {{item.name}}
            <span :class="item.isOnline?'onLine':'notOnLine'" class="dian">·</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "./receptionCenter.scss";
</style>
<style>

</style>
<script lang="ts" src="./receptionCenter.ts"></script>
