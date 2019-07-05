/* 组件接收参数 */
export interface ElderlyInfoData {
  orderId: string       /* 工单编号 */
}



/* Data 页面上使用到的变了 */
export interface PrivData {
  isShowDown: boolean                           /* 是否显示箭头 */
  elderlyInfo: ElderlyInfo                      /* 老人信息 */
}

export interface ElderlyInfo {
  name: string,         /* 姓名 */
  sex: string,          /* 性别 */
  age: number | null,   /* 年龄 */
  address: string,      /* 地址 */
  xiaokang?: string,    /* 小康 */
  duju?: string         /* 独居 */
  healthInfo: string[]  /* 健康病史 */
}
