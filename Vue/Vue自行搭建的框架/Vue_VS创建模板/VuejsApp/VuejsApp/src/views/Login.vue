<template>
  <el-row type="flex" justify="center">
    <el-card v-if="isLogin">
      欢迎：admins
      <br>
      <br>
      <el-button type="primary" icon="el-icon-upload" @click="loginOut">退出登录</el-button>
    </el-card>
    <el-form v-else ref="loginForm" :model="user"  :rules="rules" status-icon label-width="50px">
      <el-form-item label="账号" prop="name">
          <el-input v-model="user.name"></el-input>
          <p>{{content}}</p>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="user.pass" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
export default {
  methods: {//存放方法
    login: function() {
      let that = this;
      that.$store.commit("saveToken", ""); //清掉 token
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$Ajax(
            {
              url:"/api/Interface/Leaving/GetLeaving",
              params: { name: that.user.name, pass: that.user.pass },
              loadingType:false
            },
            r => {
              if (!that.$app.Com.IsNull(r)) {
                var token = '1';
                that.$store.commit("saveToken", token); //保存 token
                this.$notify({
                  type: "success",
                  message: "欢迎你," + this.user.name + "!",
                  duration: 3000
                });
                // // eslint-disable-next-line no-useless-escape
                // console.log(that.$store.state.token);
                this.$router.replace("/");
              } else {
                this.$message({
                  type: "error",
                  message: "用户名或密码错误",
                  showClose: true
                });
              }
            }
          );
        } else {
          return false;
        }
      });
    },
    loginOut() {
      this.isLogin = false;
      this.$store.commit("saveToken", ""); //清掉 token
    }
  },
  data() {
      return {
        content:'',
      isLogin: false,
      user: {},
      rules: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        pass: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  created() {//页面渲染
    if (window.localStorage.Token && window.localStorage.Token.length >= 128) {
      this.isLogin = true;
    }
  }
};
</script>