import { Component, Vue } from "vue-property-decorator"
import { LoginData } from './login.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  /* data */
  form: LoginData = {
    account: '',
    pwd: ''
  }
  rules: any = {
    account: [
      { type: 'string', required: true, message: '请输入账号', trigger: 'blur' },
      { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
    ],
    pwd: [
      { type: 'string', required: true, message: '请输入密码', trigger: 'blur' },
      { min: 1, max: 20, message: '长度在 1 到 30 个字符', trigger: 'blur' }
    ]
  }
  that: any = {};
  /* 页面加载之前 */
  created() {
  }
  /* 页面加载之后 */
  mounted() {
  }

  /* 方法 */
  onSubmit(form: string): void {
    (this.$refs[form] as any).validate((valid: any) => {

      if (valid) {

      } else {

      }
    });
  }
  /* 初始化函数 */
  init() {
    
  }

}
