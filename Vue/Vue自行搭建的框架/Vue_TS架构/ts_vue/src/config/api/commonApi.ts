import base from '../base';
import $ from '@/utils/http';


/* 获取处置事件列表 */
export const getTask = (data?: any) => {
    return $.Ajax({ url: base.commonBase + 'api/TodoTask/GetTask', method: 'POST', params: { ...data } }, true);
}
/* 获取处置中任务 */
export const getDoingTasks = (data?: any) => {
    return $.Ajax({ url: base.commonBase + 'api/TodoTask/GetDoingTasks', method: 'GET', params: { ...data } }, true);
}
/* 获取当前操作员所辖区域 */
export const getByCurrentOperator = (data?: any) => {
    return $.Ajax({ url: base.commonBase + 'api/Region/GetByCurrentOperator', method: 'GET', params: { ...data } }, true);
}
/* 获取养老顾问 */
export const getCounselorList = (data?: any) => {
    return $.Ajax({ url: base.commonBase + 'api/Region/GetCounselorList', method: 'GET', params: { ...data } }, true);
}