import { Loading } from 'element-ui';
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
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
*/

function apiAxios(method, url, params, success) {
    if (params) {
        params = filterNull(params)
    }
    instance({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        baseURL: location.origin,
        withCredentials: false
    })
        .then(function (res) {
            success(res.data);
        })
        .catch(function (err) {
            let res = err.response
            if (err) {
                window.alert('api error, HTTP CODE: ' + res.status)
            }
        })
}

const queue = [];
var loadinginstace
function destroy(url) {
    delete queue[url]
    if (!Object.keys(queue).length) {
        // hide loading
        loadinginstace.close();
    }
}
const instance = axios.create()
instance.interceptors.request.use(res => {// 请求拦截
    if (!Object.keys(queue).length) {
        // show loading
        loadinginstace = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
    }
    if (res.url) {
        queue[res.baseURL+res.url] = true
    }
    return res
}, error => {
    console.error(error)
})
instance.interceptors.response.use(res => {// 响应拦截
    
    if (res.config.url) {
        destroy(res.config.url)
    }
    const { data, status } = res
    if (status === 200 && data && data.code === 0) { return data } // 请求成功
    return requestFail(res) // 失败回调 返回undefined
}, error => {
    if (error.config.url) {
        destroy(error.config.url)
    }
    console.error(error)
})

const requestFail = (res => {
    let errStr = '网络繁忙！'
    // token失效重新登陆
    if (res.data.code === 1000001) {
        return router.replace({ name: 'login' })
    }

    return {
        err: console.error({
            code: res.data.errcode || res.data.code,
            msg: res.data.errmsg || errStr
        })
    }
})





// 返回在vue模板中的调用接口
export default {
    get: function (url, params, success) {
        return apiAxios('GET', url, params, success)
    },
    post: function (url, params, success) {
        return apiAxios('POST', url, params, success)
    },
    put: function (url, params, success) {
        return apiAxios('PUT', url, params, success)
    },
    delete: function (url, params, success) {
        return apiAxios('DELETE', url, params, success)
    }
}