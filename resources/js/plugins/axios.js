import axios from 'axios'
import store from '@/stores'
import router from '@/router'
import { Message, MessageBox } from 'element-ui';
import { getToken, setToken } from '@/plugins/auth'
import { showFullScreenLoading, tryHideFullScreenLoading} from "./axiosInitHelper";

axios.defaults.baseURL = process.env.axios.URL_PERFIX
axios.defaults.timeout = 15000
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.common['Accept']

const token = getToken()
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// 请求拦截器
axios.interceptors.request.use((config) => {
    // 增加自定义字段
    // config.showLoading = true

    // 加载提示
    // if (config.showLoading) {
    //     showFullScreenLoading()
    // }

    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((response) => {
    // if (response.config.showLoading) {
    //     tryHideFullScreenLoading()
    // }

    // 判断一下响应中是否有 token，如果有就直接使用此 token 替换掉本地的 token。你可以根据你的业务需求自己编写更新 token 的逻辑
    var token = response.headers.authorization;
    if (token) {
        // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
        setToken(token)
    }

    if (response.status !== 200) {
        return Promise.reject('errCode：' + response.status);
    } else {
        const res = response.data

        switch (res.respCode){
            // 如果响应中的 respCode 为 400，那么就弹出一条错误提示给用户
            case 400:
                Message.error(res.errMsg)
                break
            // token失效
            case 401:
                // Message.error('你已被登出')

                store.dispatch('logout').then(() => {
                    router.push({ name: "Login" })
                })
                break
        }

        if (res.respCode === 200) {
            return res.data;
        } else {
            return Promise.reject('errMsg：' + res.errMsg);
        }
    }
}, (error) => {
    // tryHideFullScreenLoading();

    return Promise.reject(error);
})

export default axios
