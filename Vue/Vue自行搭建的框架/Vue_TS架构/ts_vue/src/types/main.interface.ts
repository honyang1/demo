// main.Data 参数类型
export interface MainData {
  pageName: string
}
// VUEX main.State 参数类型
export interface MainState {
  [key: string]: any
}
// 接口参数类型
export interface MainReq {
  appCode: 'Service' | 'Operation'  /* Operation-运营端 Service-商家端 */
}

// 接口接收参数类型
export interface MainRet {
  code?: string,  /* 编号 */
  name?: string,  /* 菜单名称 */
  url: string,  /* 菜单地址 */
  imgSrc?: string,  /* 图片路径 */
  appCode?: string,  /* 应用端标识 */
  parentCode?: string,  /* 父级菜单 */
  sort?: number,  /* 令牌 */
  menuDtos: MainRet[]  /* 子菜单 */
}