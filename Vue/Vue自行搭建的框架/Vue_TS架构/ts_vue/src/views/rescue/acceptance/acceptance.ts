import { Component, Vue } from "vue-property-decorator"
import * as Type from "@/types/rescue/acceptance.interface"
import { MapData, MapRes, WarningData, ElderlyInfoData } from "@/types/components/index"
import { Getter, Action } from "vuex-class"
import { rescueApi, basicApi } from '@/config/api';
import { groupType } from '@/types/enum';

import { ElderlyInfo, Map, Warning, Audio } from "@/components/index" // 组件

@Component({
  components: {
    ElderlyInfo,
    Map,
    Audio,
    Warning
  }
})
export default class About extends Vue {
  @Getter client: any          //  建立signalR连接
  @Getter common: any          // 公共数据

  Data: Type.AcceptanceData = {
    orderId: '',            /* 工单编号 */
    taskCenterTaskId: "",   /* 受理中心任务Id */
    allSosType: [],         /* 事件类型集合 */
    acceptList: [],         /* 操作记录 */
    form: {                 /* 预案确认表单 */
      sosType: "",          /* 事件类型 */
      address: "",          /* 地址 */
      lngLat: '',           /* 经纬度 */
      lng: undefined,       /* 经度 */
      lat: undefined,       /* 纬度 */
      remarks: "",          /* 备注 */
      rules: {              /* 表单验证规则 */
        address: [
          { required: true, message: "请输入地址!", trigger: "blur" }
        ],
        lngLat: [
          { required: true, message: "请输入经纬度，并以逗号隔开经度和纬度!", trigger: "blur" }
        ],
        sosType: [
          { required: true, message: "请选择事件类型!", trigger: "change" }
        ]
      }
    }
  }
  mapData: MapData = {                               // 地图组件
    visible: false,
    isQuery: true,
    form: {}
  }
  warningData: WarningData[] = []                    /* 报警组件传入参数 */
  elderlyInfo: ElderlyInfoData = { orderId: '' };    /* 老人组件传入参数 */




  created() {               /* 页面加载之前事件 */
    this.Data.taskCenterTaskId = this.$route.params.taskCenterTaskId; // 获取受理中心任务Id 
    this.Data.orderId = this.$route.params.orderId;                   // 获取工单编号
    if (!this.$com.isNull(this.Data.orderId))
      this.init();

  }

  init() {                  /* 初始化函数 */
    this.getAllSosType()    // 获取事件类型
    this.getOrder()         // 获取工单信息
    this.getAccept()        // 获取操作记录
    this.getAlarms()        // 获得工单的报警信息

    this.chatClient();      // 建立signalr连接
  }

  submit(obj: Type.Form) {  /* 确认预案 */
    let supplement: Type.SupplementReq = {
      sosType: obj.sosType,
      taskCenterTaskId: this.Data.taskCenterTaskId,
      orderId: this.Data.orderId,
      lng: obj.lng,
      lat: obj.lat,
      address: obj.address,
      remark: obj.remarks
    }
    rescueApi.postSupplement({ ...supplement }).then((res: any) => {
    });
  }
  misreport() {             /* 作废 */
    let invalid: Type.InvalidReq = { orderId: this.Data.orderId, taskCenterTaskId: this.Data.taskCenterTaskId };
    rescueApi.postInvalid({ ...invalid }).then((res: any) => {
      this.$router.push({ name: 'receptionCenter' }); // 回到服务受理页面
    })
  }



  async getAllSosType() {         /* 获取事件类型 */
    await rescueApi.getAllSosType().then((res: any) => {
      this.Data.allSosType = res.sort((a: Type.AllSosTypeRet, b: Type.AllSosTypeRet) => a.sort - b.sort);
    })
  }
  async getOrder() {              /* 获取工单信息 */
    await rescueApi.getOrder({ orderId: this.Data.orderId }).then((res: any) => {
      let { address, lng, lat, sosType } = res;
      let lngLat = lng + ',' + lat;
      this.Data.form.address = address;
      this.Data.form.lat = lat;
      this.Data.form.lng = lng;
      this.Data.form.lngLat = lngLat;
      if (!this.$com.isNull(sosType))
        this.Data.form.sosType = sosType;
    })
  }
  async getAccept() {             /* 获取操作记录 */
    await rescueApi.getAccept({ orderId: this.Data.orderId }).then((res: any) => {
      this.Data.acceptList = res.map((item: Type.acceptList) => {
        return {
          taskId: item.taskId,                           /* 任务Id */
          actionTime: this.$com.currentTime(item.actionTime, 'HH:mm'),
          operator: item.operator,                       /* 操作人 */
          actionTypeName: item.operator,                 /* 动作 */
          resourceName: item.resourceName,               /* 对象 */
          messageContent: item.messageContent,           /* 描述 */
          audioUrl: item.audioUrl                        /* 录音地址 */
        }
      })
    })
  }
  async getAlarms() {             /* 获得工单的报警信息 */
    await rescueApi.getAlarms({ orderId: this.Data.orderId }).then((res: any) => {
      this.warningData = res.map((item: Type.AlarmsRet) => {
        return {
          content: item.alarmContent,
          time: item.alarmTime,
          icon: ''
        }
      })
    })
  }

  showMap(item: Type.Form) {      /* 显示地图插件 */
    this.mapData.visible = true;
    this.mapData.form = { lng: item.lng, lat: item.lat }
  }
  mapCallback(mapData: MapRes) {  /* 地图回调函数 */
    let { lng, lat } = mapData;
    this.Data.form.lng = lng;
    this.Data.form.lat = lat;
    this.Data.form.lngLat = lng + ',' + lat;
  }

  chatClient() {                  /* 建立signalr连接 */
    this.client.start().then(() => { this.joinGroup() }).catch(() => { });
    this.client.setOnGroupMessagesListener((res: any) => {                          /* 主动接收消息 */
      console.log(res);
    })
  }
  joinGroup() {                   /* 加入报警群组 */
    let item: Type.JoinGroupReq = {
      orderId: this.Data.orderId,
      appKey: this.common.appKey,
      groupType: groupType.救援报警组
    }
    basicApi.postJoinGroup(item); /* 加入群组 */
  }
}
