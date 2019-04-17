import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { MainData } from '@/types/views/main.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author
  
  // Action
   @Action postData

  // data
  data: MainData = {
    pageName: 'main'
  }

  created() {
    //
    debugger;
    this.postData()
  }
  
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
    
}
