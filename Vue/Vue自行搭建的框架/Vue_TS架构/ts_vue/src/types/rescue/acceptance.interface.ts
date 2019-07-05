import { groupType } from '../enum';
/* acceptance.Data 参数类型 */
export interface AcceptanceData {
  orderId: string                 /* 工单ID */
  taskCenterTaskId: string,       /* 受理中心任务Id */
  allSosType: AllSosTypeRet[]     /* 事件类型 */
  acceptList: acceptList[]        /* 操作记录集合 */
  form: Form                      /* 表单数据 */
}
export interface acceptList {
  actionTime: any                     /* 时间 */
  operator: any                       /* 操作人 */
  actionTypeName: string              /* 动作 */
  resourceName: string                /* 对象 */
  messageContent: string              /* 描述 */
  audioUrl: string                    /* 录音地址 */
  taskId: string                      /* 任务Id */
}
export interface Form {
  rules: any                     /* 表单验证规则 */
  sosType: any                   /* 事件类型 */
  address: string                /* 地址 */
  lngLat: string                 /* 经纬度 */
  lng?: number                   /* 经度 */
  lat?: number                   /* 纬度 */
  remarks: string                /* 备注 */
}

/* VUEX acceptance.State 参数类型 */
export interface AcceptanceState {
  [key: string]: any
}

/* 接口请求参数类型 - 工单确认 */
export interface SupplementReq {
  orderId: string,           /* 工单编号 */
  sosType: string,           /* 事件类型编码 */
  taskCenterTaskId: string,  /* 受理中心任务Id */
  lng?: number,              /* 经度 */
  lat?: number,              /* 纬度 */
  address?: string,          /* 地址 */
  remark?: string            /* 备注 */
}

/* 接口请求参数类型 - 工单误报 */
export interface InvalidReq {
  orderId: string,           /* 工单编号 */
  taskCenterTaskId: string   /* 受理中心任务Id */
}

/* 接口请求参数类型 - 加入signalr群组 */
export interface JoinGroupReq {
  orderId: string,           /* 工单编号 */
  groupType: groupType,      /* 组类型 */
  appKey: 'Elderly.SOS'      /* app标识 */
}



/* 接口接收参数类型 - 获取事件类型 */
export interface AllSosTypeRet {
  code: string,            /* 编码 */
  name: string,            /* 名称 */
  dictionaryCode: string,  /* 字典编码 */
  sort: number             /* 排序 */
}
/* 接口接收参数类型 - 获取工单的报警信息 */
export interface AlarmsRet {
  alarmContent: string,            /* 报警内容 */
  alarmTime: string,               /* 报警时间 */
}


