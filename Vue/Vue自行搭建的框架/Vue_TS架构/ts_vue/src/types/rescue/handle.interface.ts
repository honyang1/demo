 
/* handle.Data 参数类型 */
export interface HandleData {
  pageName: string
}
/* VUEX handle.State 参数类型 */
export interface HandleState {
  [key: string]: any
}

/* 接口请求参数类型 -  */
// export interface HandleReq {
//   id?: string,                    /* id查询 */
// }

/* 接口接收参数类型 -  */
// export interface HandleRet {
//   id?: string,          /* 主键ID */
// }

/* 接口接收参数类型 - 获取工单的报警信息 */
export interface AlarmsRet {
  alarmContent: string,            /* 报警内容 */
  alarmTime: string,               /* 报警时间 */
}