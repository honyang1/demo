// warning.Data 参数类型
export interface WarningData {
  content: string,      /* 内容 */
  time: string,         /* 时间 */
  icon: string          /* 图标 */
}

export interface PrivData extends WarningData {
  dateTime?: string   /* 显示日期 */
}

