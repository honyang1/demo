import { Component, Vue } from "vue-property-decorator"
import * as Type from "@/types/rescue/receptionCenter.interface"
import { State, Action } from "vuex-class"
import { commonApi } from '@/config/api';
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  @State appCode: any
  @Action updateState: any

  counselorList: Type.CounselorListRet[] = []
  currentOperator: Type.CurrentOperatorRet[] = []
  taskOperatorReq: Type.TaskOperatorReq = {
    _EQ_Status_: '01',
    page: 1,
    size: 999
  }
  taskList: Type.List[] = []
  doingTasks: Type.DoingTasksRet[] = []

  created() {
    this.init();
  }

  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    this.getCounselorList() // 获取养老顾问
    this.getByCurrentOperator() // 获取当前操作员所辖区域
    this.getTask(); // 获取处置事件列表
    this.getDoingTasks() // 获取处置中任务

  }
  /* 获取养老顾问 */
  async getCounselorList() {
    await commonApi.getCounselorList().then((res: any) => {
      this.counselorList = res;
    })
  }
  /* 获取当前操作员所辖区域 */
  async getByCurrentOperator() {
    await commonApi.getByCurrentOperator().then((res: any) => {
      this.currentOperator = res;
    })
  }
  /* 获取处置事件列表 */
  async getTask() {
    await commonApi.getTask(this.taskOperatorReq).then((res: any) => {
      if (!this.$com.isNull(res))
        this.taskList = res.list.map((item: Type.List) => {
          return {
            ...item,
            requestTime: this.$com.currentTime(item.requestTime, 'MM月dd日 HH:mm:ss')
          }
        });
    })

  }
  /* 获取处置中任务 */
  async getDoingTasks() {
    await commonApi.getDoingTasks().then((res: any) => {
      this.doingTasks = res;
    })
  }

  clickSkip(orderId: string, taskCenterTaskId: string) {  // 跳转到受理案件页面
    this.$router.push({ name: 'acceptance', params: { orderId, taskCenterTaskId } });
  }
  clickDisposal(orderId: string) {                                       // 跳转到处置案件页面
    this.$router.push({ name: 'handle', params: { orderId } });
  }
  currentTime(date: string) { // 日期转换
    return this.$com.currentTime(date, 'MM月dd日 HH:mm:ss');
  }


}
