import { Loading, Notification } from 'element-ui';
import App from './common';
// import store from '../store/store'

var config = require('./config')
    // 引用axios
var axios = require('axios')
var store = require('../store/store')

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
const header = { 'content-type': 'application/json; charset=utf-8' }

function apiAxios(config, success) {
    if (config.params) {
        config.params = filterNull(config.params)
    }
    config.headers = App.com.isNull(config.headers) ? header : config.headers;
    config.headers['Authorization'] = store.default.state.token; //App.session.get('Token');
    instance({
            method: App.com.isNull(config.method) ? 'GET' : config.method,
            url: config.url,
            data: config.method === 'POST' || config.method === 'PUT' ? config.params : null,
            params: App.com.isNull(config.method) || config.method === 'GET' || config.method === 'DELETE' ? config.params : null,
            baseURL: location.origin,
            withCredentials: false,
            headers: App.com.isNull(config.headers) ? header : config.headers,
            responseType: App.com.isNull(config.responseType) ? 'json' : config.responseType,
            loadingType: App.com.isNull(config.loadingType) ? true : config.loadingType
        })
        .then(function(res) {
            success(res);
        })
        .catch(function(err) {
            let res = err.response
            if (res) {
                window.alert('api error, HTTP CODE: ' + res.status)
            } else {
                // 错误信息显示
                console.log("错误信息：" + err);
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
    if (!Object.keys(queue).length && res.loadingType) {
        // show loading
        loadinginstace = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
    }
    if (res.url && res.loadingType) {
        queue[res.url] = true
    }
    return res
}, error => {
    // eslint-disable-next-line no-console
    return ErrorRequest(error);
})
instance.interceptors.response.use(res => { // 响应拦截
    if (res.config.url) {
        destroy(res.config.url)
    }
    const { data, status } = res
    if (status === 200) { return data } // 请求成功
    return ErrorRequest(res) // 失败回调 返回undefined
}, error => {
    if (error.config.url) {
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
    Ajax: function(config, success) {
        return apiAxios(config, success)
    }
};