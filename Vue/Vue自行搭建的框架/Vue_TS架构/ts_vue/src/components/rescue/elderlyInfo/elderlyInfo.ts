import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import * as type from "@/types/components/rescue/elderlyInfo.interface";
import { rescueApi } from '@/config/api';

@Component({})
export default class About extends Vue {
  @Getter rescue: any          //  vuex-救援公共数据
  PrivData: type.PrivData = {
    isShowDown: false,  /* 是否显示箭头 */
    elderlyInfo: {
      name: '',           /* 姓名 */
      sex: '',            /* 性别 */
      age: null,          /* 年龄 */
      address: '',        /* 地址 */
      xiaokang: '',       /* 小康 */
      duju: '',           /* 独居 */
      healthInfo: []      /* 健康病史 */
    }
  }     //  页面数据

  created() {
    if (!this.$com.isNull(this.rescue.orderId))
      this.getElderInfo();       // 获取老人基本信息
  }

  async getElderInfo() {       //  获取老人基本信息

    await rescueApi.getElderInfo({ orderId: this.rescue.orderId }).then((res: any) => {
      this.PrivData.elderlyInfo = {
        name: res.baseInfo.name,
        sex: res.baseInfo.sex,
        age: new Date().getFullYear() - new Date(res.baseInfo.birthday).getFullYear(),
        address: res.baseInfo.address,
        healthInfo: res.healthInfo.map((itm: any) => itm.value)
      }
      this.PrivData.isShowDown = this.$com.isNull(res) || res.healthInfo.length < 4 ? false : true
    })
  }
}