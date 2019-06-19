import { Notification } from 'element-ui';
import { com } from './utils';
import axios from 'axios';
import store from '@/store/index';

// 自定义判断元素类型JS
const toType = (obj) => {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
const filterNull = (o) => {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}

const queue = [];
var loadinginstace;
const header = { 'content-type': 'application/json; charset=utf-8' }

async function apiAxios(config) {
    if (config.params) {
        config.params = filterNull(config.params)
    }
    config.headers = App.com.isNull(config.headers) ? header : config.headers;
    // config.headers['Authorization'] = store.default.state.token;
    const instance = axios.create();
    await interceptors(instance);
    return instance({
        method: com.isNull(config.method) ? 'GET' : config.method,
        url: config.url,
        data: config.method === 'POST' || config.method === 'PUT' ? config.params : null,
        params: com.isNull(config.method) || config.method === 'GET' || config.method === 'DELETE' ? config.params : null,
        baseURL: location.origin,
        withCredentials: false,
        headers: com.isNull(config.headers) ? header : config.headers,
        responseType: com.isNull(config.responseType) ? 'json' : config.responseType,
        loadingType: com.isNull(config.loadingType) ? true : config.loadingType
    })
}

const interceptors = (instance) => {
    instance.interceptors.request.use(res => { // 请求拦截
        if (!Object.keys(queue).length && res.loadingType)
            store.commit('showLoading');
        if (res.url && res.loadingType)
            queue[res.url] = true
        return res
    }, error => {
        return ErrorRequest(error);
    })
    instance.interceptors.response.use(res => { // 响应拦截
        if (res.config.url)
            destroy(res.config.url)
        const { status } = res
        if (status === 200) { return res } // 请求成功

        ErrorRequest(res);
        return null;// 失败回调 返回null
    }, error => {
        if (error.config.url)
            destroy(error.config.url)
        return ErrorRequest(error)
    })

}

const destroy = (url) => {
    delete queue[url]
    if (!Object.keys(queue).length) {
        store.commit('hideLoading');
    }
}

const options = {
    title: '错误',
    message: '',
    duration: 0
};
const ErrorRequest = (error => {
    if (App.com.isNull(error.response)) {
        options.message = error.message;
    } else
        if (error.response.status === 401) {
            window.top.location.href = config.LoginUrl;
            return
        } else if (error.response.status === 500) {
            options.message = '服务器内部错误';
        } else {
            options.message = '错误编码：' + error.response.status + '    错误信息：' + error.response.statusText;
        }
    Notification.error(options)
});


export default {
    Ajax: function (config, success) {
        return apiAxios(config, success)
    }
};

