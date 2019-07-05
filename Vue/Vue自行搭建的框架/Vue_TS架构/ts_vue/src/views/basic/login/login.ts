import { Component, Vue } from "vue-property-decorator"
import { LoginData, LoginReq } from '@/types/login.interface'
import { Action, State } from "vuex-class"
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  /* data */
  @State appCode: any
  form: LoginReq = {
    userName: 'User',
    pwd: '123456',
    appCode: this.appCode
  }
  rules: LoginData = {
    userName: [
      { type: 'string', required: true, message: '请输入账号', trigger: '#f33131' },
      { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: '#f33131' }
    ],
    pwd: [
      { type: 'string', required: true, message: '请输入密码', trigger: '#f33131' },
      { min: 1, max: 20, message: '长度在 1 到 30 个字符', trigger: '#f33131' }
    ]
  }
  @Action login: any
  /* @State Login: any  Login ===  （modules: { Login }）访问子集的时候用继承的名字，直接拿出子集的所有集合 */
  /* 登陆 */
  onSubmit(form: string): void {
    (this.$refs[form] as any).validate((valid: any) => {
      if (valid)
        this.login(this.form).then(() => {
          if (this.$com.isNull(this.$route.query.redirect))
            this.$router.push(this.$route.query.redirect as any);
          else
            this.$router.push("/");
        });
    });
  }
}
