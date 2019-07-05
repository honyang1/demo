import base from '../base';
import $ from '@/utils/http';


/* 登陆 */
export const login = (data: any) => {
    return $.Ajax({ url: base.commonBase + 'api/Account/Login', method: 'POST', params: { ...data } }, true);
}
/* 获取菜单 */
export const getMenus = (data: any) => {
    return $.Ajax({ url: base.commonBase + 'api/Account/GetMenus', method: 'GET', params: { ...data } }, false);
}
/* 加入signalr群组 */
export const postJoinGroup = (data: any) => {
    return $.Ajax({ url: base.messageBase + 'group/JoinGroup', method: 'POST', params: { ...data } }, false);
}