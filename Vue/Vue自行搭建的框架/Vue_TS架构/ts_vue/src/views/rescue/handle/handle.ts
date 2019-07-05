import { Component, Vue } from "vue-property-decorator"
import * as Type from "@/types/rescue/handle.interface"
import { Action, Getter } from "vuex-class"
import { rescueApi } from '@/config/api';
import { ElderlyInfo, Warning } from "@/components/index" // 组件
import { WarningData } from "@/types/components/index"


@Component({
  components: {
    ElderlyInfo,
    Warning
  }
})
export default class About extends Vue {
  @Action updateRescue: any               /* 修改rescue 内的数据 */
  @Getter rescue: any                     /* 获取救援公共数据 */
  warningData: WarningData[] = []         /* 报警组件传入参数 */

  created() {                             /* 页面加载事件 */
    this.updateRescue({ orderId: this.$route.params.orderId });                   // 获取页面orderid
    if (!this.$com.isNull(this.rescue.orderId))                                   // 判断orderid是否为空
      this.init();
  }

  init() {                                /* 初始化函数 */
    this.getAlarms()                                                              // 获得工单的报警信息
  }

  async getAlarms() {                     /* 获得工单的报警信息 */
    await rescueApi.getAlarms({ orderId: this.rescue.orderId }).then((res: any) => {
      this.warningData = res.map((item: Type.AlarmsRet) => {
        return {
          content: item.alarmContent,
          time: item.alarmTime,
          icon: ''
        }
      })
    })
  }

}
