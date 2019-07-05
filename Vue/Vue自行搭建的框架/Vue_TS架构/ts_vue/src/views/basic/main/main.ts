import { Component, Vue, Watch } from "vue-property-decorator"
import { MainData, MainRet } from '@/types/Main.interface'
import { State, Getter } from "vuex-class"
import { basicApi } from '@/config/api';
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // data
  data: MainRet[] = [];
  activeMain?: string = '';
  activeTwoMain?: string = '';
  selected?: string = 'block';

  @Getter common: any
  @Getter img: any
  created() {
    this.init();
  }

  // 初始化函数
  init() {
    basicApi.getMenus({ appCode: this.common.appCode }).then((res: any) => {
      this.data = res;
      this.activeMain = res[0].code;
      this.selected = res[0];
      this.$router.push(res[0].url);
    });
  }
  /* 点击一级菜单 */
  clickMan(item: MainRet) {
    this.activeMain = item.code;
    this.activeTwoMain = item.code;
    if (!this.$com.isNull(item.url))
      this.$router.push(item.url);
  }
  /* 点击二级菜单 */
  clickTwoMenu(item: MainRet, event: Event) {
    this.activeTwoMain = '';
    this.selected = item.code;
    event.stopPropagation();
    this.$router.push(item.url);
  }

}
