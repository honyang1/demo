import base from '../base';
import $ from '@/utils/http';


/* 获取老人基本信息 */
export const getElderInfo = (data?: any) => {
    return $.Ajax({ url: base.sosBase + 'api/Elder/GetElderInfo', method: 'GET', params: { ...data } }, true);
}
/* 获取事件类型 */
export const getAllSosType = (data?: any) => {
    return $.Ajax({ url: base.sosBase + 'api/Order/GetAllSosType', method: 'GET', params: { ...data } }, true);
}
/* 获取工单信息 */
export const getOrder = (data?: any) => {
    return $.Ajax({ url: base.sosBase + 'api/Order/GetOrder', method: 'GET', params: { ...data } }, true);
}
/* 获取工单确认动作 */
export const getAccept = (data?: any) => {
    return $.Ajax({ url: base.sosBase + 'api/Action/GetAccept', method: 'GET', params: { ...data } }, true);
}
/* 获得工单的报警信息 */
export const getAlarms = (data?: any) => {
    return $.Ajax({ url: base.sosBase + 'api/Alarm/GetAlarms', method: 'GET', params: { ...data } }, true);
}

/* 工单确认 */
export const postSupplement = (data?: any) => {
    return $.Ajax({ url: base.sosBase + 'api/Order/Supplement', method: 'POST', params: { ...data } }, true);
}

/* 工单误报 */
export const postInvalid = (data?: any) => {
    return $.Ajax({ url: base.sosBase + 'api/Order/Invalid', method: 'POST', params: { ...data } }, true);
}



