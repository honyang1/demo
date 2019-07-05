// login.Data 参数类型
export interface LoginData {
    userName: any, // 账号
    pwd: any // 密码
}

// VUEX login.State 参数类型
export interface LoginState {
    [key: string]: any,
    name: string,       /* 账号 */
    img: string,        /* 头像 */
    realName: string,   /* 姓名 */
    token: string       /* 令牌 */
}
// 接口参数类型
export interface LoginReq {
    userName: string    /* 用户名 */
    pwd: string			/* 密码 */
    appCode: 'Service' | 'Operation'  /* Operation-运营端 Service-商家端 */
}
