<template>
  <div class="login-wrap">
    <div class="container">
      <h1>Welcome</h1>
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="userName">
          <el-input v-model="form.userName" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="form.pwd" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit('form')">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
@import './login.scss';
</style>
<script lang="ts" src="./login.ts"></script>
