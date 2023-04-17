import axios from 'axios';
import sysConfig from '../config';
// 引入错误消息提示
import { Message } from 'element-ui';
import { getToken } from './auth';

const serviceAxios = axios.create({
    baseURL: sysConfig.axiosConfig.baseUrl || 'http://127.0.0.1:28080',
    timeout: sysConfig.axiosConfig.timeout || 5 * 1000,
});

// 请求拦截
serviceAxios.interceptors.request.use(
    (config) => {
        if (sysConfig.axiosConfig.useToken) {
            config.headers[sysConfig.tokenName] = getToken();
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// 响应拦截
serviceAxios.interceptors.response.use(
    // 正常接口返回 HTTP Status Code == 200
    (res) => {
        // 返回体是否有误
        const data = res.data;
        return data;
    },
    // 异常接口返回 HTTP Status Code != 200
    (error) => {
        console.log('出现异常：' + error);
        Message({
            message: error.response.data.message,
            type: 'error',
            duration: 3 * 1000,
            center: true,
        });
        return Promise.reject(error);
    }
);

export default serviceAxios;
