import { Loading } from 'element-ui';
import router from '../router'
import App from './common'
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
var loadingType=true;
const header={'content-type':'application/json; charset=utf-8'}
function apiAxios(config, success) {
    if (config.params) {
        config.params = filterNull(config.params)
    }
    loadingType=App.Com.IsNull(config.loadingType)?loadingType:config.loadingType
    instance({
        method: App.Com.IsNull(config.method)?'GET':config.method,
        url: config.url,
        data:config. method === 'POST' || config.method === 'PUT' ? config.params : null,
        params: config.method === 'GET' || config.method === 'DELETE' ? config.params : null,
        baseURL: location.origin,
        withCredentials: false,
        headers:App.Com.IsNull(config.headers)?header:config.headers,
        responseType:App.Com.IsNull(config.responseType)?'json':config.responseType
    })
        .then(function (res) {
            success(res);
        })
        .catch(function (err) {
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
instance.interceptors.request.use(res => {// 请求拦截
    if (!Object.keys(queue).length &&  loadingType) {
        // show loading
        loadinginstace = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
    }
    if (res.url && loadingType) {
        queue[res.baseURL+res.url] = true
    }
    return res
}, error => {
     // eslint-disable-next-line no-console
     console.error(error);
})
instance.interceptors.response.use(res => {// 响应拦截
    if (res.config.url && loadingType) {
        destroy(res.config.url)
    }
    const { data, status } = res
    if (status === 200 && data && data.code === 0) { return data } // 请求成功
    return requestFail(res) // 失败回调 返回undefined
}, error => {
    if (error.config.url && loadingType) {
        destroy(error.config.url)
    }
    // eslint-disable-next-line no-console
    console.error(error)
})

const requestFail = (res => {
    let errStr = '网络繁忙！'
    // token失效重新登陆
    if (res.data.code === 1000001) {
        // eslint-disable-next-line no-undef
        return router.replace({ name: 'login' })
    }

    return {
        // eslint-disable-next-line no-console
        err: console.error({
            code: res.data.errcode || res.data.code,
            msg: res.data.errmsg || errStr
        })
    }
})




export default {
    Ajax:function(config,success){
        return apiAxios(config, success)
    }
};
/*
    config 参数说明
        method  GET,POST,Delete PUT 默认GET
        url     请求地址
        params  参数
        loadingType 是否需要loding动画
        headers 请求标头，默认{'content-type':'application/json; charset=utf-8'},
        responseType    接收参数格式    默认json

    示例
    this.$Ajax(
            {
              url:"/api/Interface/Leaving/GetLeaving",
              params: { name: that.user.name, pass: that.user.pass },
              loadingType:false
            },
            r => {}
            }
          );
    
*/
// 返回在vue模板中的调用接口
// export default {
//     get: function (url, params, success) {
//         return apiAxios('GET', url, params, success)
//     },
//     post: function (url, params, success) {
//         return apiAxios('POST', url, params, success)
//     },
//     put: function (url, params, success) {
//         return apiAxios('PUT', url, params, success)
//     },
//     delete: function (url, params, success) {
//         return apiAxios('DELETE', url, params, success)
//     }
// }