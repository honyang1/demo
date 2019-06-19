import { Notification } from 'element-ui';
import { com } from './common';
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
    constructor() {
        this.queue = {};
    }
    async  request(config: AxiosRequestConfig, loadingType?: boolean) {
        if (config.params) {
            config.params = filterNull(config.params)
        }
        let options: any = {
            method: com.isNull(config.method) ? 'GET' : config.method,
            url: config.url,
            data: config.method === 'POST' || config.method === 'PUT' ? config.params : null,
            params: com.isNull(config.method) || config.method === 'GET' || config.method === 'DELETE' ? config.params : null,
            baseURL: location.origin,
            withCredentials: false,
            headers: com.isNull(config.headers) ? this.header : config.headers,
            responseType: com.isNull(config.responseType) ? 'json' : config.responseType,
            loadingType: com.isNull(loadingType) ? false : loadingType,
            ...config
        }
        const instance = axios.create();
        await this.interceptors(instance, options);
        return instance(options)
    }

    private interceptors(instance: any, url?: string) {
        instance.interceptors.request.use((res: any) => {
            if (!Object.keys(this.queue).length && res.loadingType) {
                store.commit('showLoading');
            }
            if (res.url && res.loadingType) {
                this.queue[res.url] = true
            }
            return res
        }, (error: any) => {
            return this.errorRequest(error);
        });

        instance.interceptors.response.use((res: any) => { // 响应拦截
            if (res.config.url) {
                this.destroy(res.config.url)
            }
            const { data, status } = res
            if (status === 200) { return data } // 请求成功
            return this.errorRequest(res) // 失败回调 返回undefined
        }, (error: any) => {
            if (error.config.url) {
                this.destroy(error.config.url)
            }
            return this.errorRequest(error)
        })

    }
    private destroy(url: string): void {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            store.commit('hideLoading ');
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
