import { Loading, Notification } from 'element-ui';
import App from './common';

var config = require('./config')
    // 引用axios
var axios = require('axios')

// 自定义判断元素类型JS
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
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
var loadingType = true;
const header = { 'content-type': 'application/json; charset=utf-8' }

function apiAxios(config, success) {
    if (config.params) {
        config.params = filterNull(config.params)
    }
    loadingType = App.Com.IsNull(config.loadingType) ? loadingType : config.loadingType
    config.headers = App.Com.IsNull(config.headers) ? header : config.headers;
    config.headers['Authorization'] = App.Session.Get('Token');
    instance({
            method: App.Com.IsNull(config.method) ? 'GET' : config.method,
            url: config.url,
            data: config.method === 'POST' || config.method === 'PUT' ? config.params : null,
            params: config.method === 'GET' || config.method === 'DELETE' ? config.params : null,
            baseURL: location.origin,
            withCredentials: false,

            headers: App.Com.IsNull(config.headers) ? header : config.headers,
            responseType: App.Com.IsNull(config.responseType) ? 'json' : config.responseType
        })
        .then(function(res) {
            success(res);
        })
        .catch(function(err) {
            let res = err.response
            if (err) {
                window.alert('api error, HTTP CODE: ' + res.status)
            }
        })
}


function destroy(url) {
    delete queue[url]
    if (!Object.keys(queue).length) {
        // hide loading
        loadinginstace.close();
    }
}
const instance = axios.create()
instance.interceptors.request.use(res => { // 请求拦截
    if (!Object.keys(queue).length && loadingType) {
        // show loading
        loadinginstace = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
    }
    if (res.url && loadingType) {
        queue[res.url] = true
    }
    return res
}, error => {
    // eslint-disable-next-line no-console
    return ErrorRequest(error);
})
instance.interceptors.response.use(res => { // 响应拦截
    if (res.config.url && loadingType) {
        destroy(res.config.url)
    }
    const { data, status } = res
    if (status === 200 && data) { return data } // 请求成功
    return ErrorRequest(res) // 失败回调 返回undefined
}, error => {
    if (error.config.url && loadingType) {
        destroy(error.config.url)
    }
    // eslint-disable-next-line no-console
    return ErrorRequest(error)
})

const options = {
    title: '错误',
    message: '',
    duration: 0
};
// const requestFail = (res => {
//     // token失效重新登陆
//     if (res.status === 401) {
//         window.top.location.href = config.LoginUrl;
//         return;
//     } else {
//         options.message = res.Message;
//     }
//     Notification.error(options)
//     return
// });
const ErrorRequest = (error => {
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
    Ajax: function(config, success) {
        return apiAxios(config, success)
    }
};