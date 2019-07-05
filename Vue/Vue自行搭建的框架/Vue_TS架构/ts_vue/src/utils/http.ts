import { Notification } from 'element-ui';
import { com, session } from './common';
import axios, { AxiosRequestConfig } from 'axios';
import store from '@/store/index';

function filterNull(o: any): any { // 参数过滤函数 为null 的值
    for (let key of Object.keys(o)) {
        if (o[key] === null) {
            delete o[key]
        }
        if (typeof o[key] === "string") {
            o[key] = o[key].trim()
        } else if (typeof o[key] === 'object') {
            o[key] = filterNull(o[key])
        } else if (typeof o[key] === 'function') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}

class http {
    public queue: any;
    private header: any = { 'content-type': 'application/json; charset=utf-8' };
    public constructor() {
        this.queue = {}
    }
    async  request(config: AxiosRequestConfig, loadingType?: boolean) {
        if (config.params) {
            config.params = filterNull(config.params)
        }
        let headers = com.isNull(config.headers) ? this.header : config.headers;
        headers.Authorization = 'Bearer ' + session.get('token');
        let options: AxiosRequestConfig | any = config;
        options.method = com.isNull(config.method) ? 'GET' : config.method;
        options.data = config.method === 'POST' || config.method === 'PUT' ? config.params : null;
        options.params = com.isNull(config.method) || config.method === 'GET' || config.method === 'DELETE' ? config.params : null;
        options.baseURL = location.origin;
        options.withCredentials = false;
        options.headers = headers;
        options.responseType = com.isNull(config.responseType) ? 'json' : config.responseType;
        let url = com.isNull(loadingType) || !loadingType ? null : options.url;
        const instance = axios.create();
        await this.interceptors(instance, url);
        return instance(options)
    }

    private interceptors(instance: any, url: string | null) {
        instance.interceptors.request.use((res: any) => {
            if (!Object.keys(this.queue).length && url !== null) {
                store.commit('showLoading');
            }
            if (url !== null) {
                this.queue[url] = true
            }
            return res
        }, (error: any) => {
            return this.errorRequest(error);
        });

        instance.interceptors.response.use((res: any) => { // 响应拦截
            if (url !== null) {
                this.destroy(url)
            }
            const { data, status } = res
            if (status === 200) { return data } // 请求成功
            return this.errorRequest(res) // 失败回调 返回undefined
        }, (error: any) => {
            if (url) {
                this.destroy(url)
            }
            return this.errorRequest(error)
        })

    }
    private destroy(url: string): void {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            store.commit('hideLoading');
        }
    }
    private errorRequest(error: any): void {
        const options = {
            title: '错误',
            message: '',
            duration: 0
        };
        if (com.isNull(error.response)) {
            options.message = error.message;
        } else
            if (error.response.status === 401) {
                window.top.location.href = ''; // 跳转到登陆页面
                return
            } else if (error.response.status === 500) {
                options.message = '服务器内部错误';
            } else {
                options.message = '错误编码：' + error.response.status + '    错误信息：' + error.response.statusText;
            }
        Notification.error(options)
    }

}

const ajax = new http();

export default {
    Ajax(config: AxiosRequestConfig, loadingType?: boolean) {
        return ajax.request(config, loadingType)
    }
};
