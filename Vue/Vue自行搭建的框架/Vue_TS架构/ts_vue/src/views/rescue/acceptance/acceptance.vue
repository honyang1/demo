<template>
  <article class="acceptance-wrap">
    <!-- 老人信息 -->
    <ElderlyInfo></ElderlyInfo>
    <article class="foot">
      <section class="footLeft">
        <!-- 报警信息 -->
        <div class="warning">
          <Warning :data="warningData"></Warning>
        </div>

        <!-- 受理预案 -->
        <div class="plan">
          <div class="title">受理预案</div>
          <el-scrollbar class="section"></el-scrollbar>
        </div>
      </section>
      <section class="footRight">
        <!-- 操作记录 -->
        <div class="record">
          <div class="title">操作记录</div>
          <div class="section">
            <dl class="thead">
              <dd>时间</dd>
              <dd>操作人</dd>
              <dd>动作</dd>
              <dd>对象</dd>
              <dd>描述</dd>
            </dl>
            <el-scrollbar class="tbody">
              <dl v-for="item in Data.acceptList" :key="item.taskId">
                <dd>{{item.actionTime}}</dd>
                <dd>{{item.operator}}</dd>
                <dd>{{item.actionTypeName}}</dd>
                <dd>{{item.resourceName}}</dd>
                <dd class="ddAudio">{{item.messageContent}}<Audio v-if="item.audioUrl.length>1" :data="{url:item.audioUrl}"></Audio></dd>
              </dl>
            </el-scrollbar>
          </div>
        </div>
        <!-- 预案确认 -->
        <div class="comfirm">
          <div class="title">预案确认</div>
          <el-scrollbar class="section">
            <el-form ref="form" :rules="Data.form.rules" :model="Data.form" label-width="100px">
              <el-col class="first" :span="12">
                <el-form-item label="事件类型：" prop="sosType">
                  <el-select v-model="Data.form.sosType" placeholder="请选择事件类型">
                    <el-option
                      v-for="item in Data.allSosType"
                      :label="item.name"
                      :value="item.code"
                      :key="item.code"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col class="first" :span="12">
                <el-form-item label="地址：" prop="address">
                  <el-input v-model="Data.form.address"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="经纬度：" prop="lngLat">
                  <el-input v-model="Data.form.lngLat" oninput="value=value.replace(/[^\d.]/g,'')"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="1">
                <span class="icon_address" @click="showMap(Data.form)"></span>
              </el-col>
              <el-col :span="12">
                <el-form-item label="备注：" prop="remarks">
                  <el-input type="textarea" :rows="2" v-model="Data.form.remarks"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-button @click="submit(Data.form)" type="primary">确认预案</el-button>
                <el-button @click="misreport()">作废</el-button>
              </el-col>
            </el-form>
          </el-scrollbar>
        </div>
      </section>
    </article>
    <!-- 地图组件 -->
    <Map :data="mapData" @callback="mapCallback"></Map>
  </article>
</template>

<style lang="sass" scoped>@import './acceptance.scss';</style>
<script lang="ts" src="./acceptance.ts"></script>
