// 封装请求
import axios from "axios";
import store from '@/store'
import router  from "@/router";
import { useStorage } from "@/utils";
const BASE_URL = 'https://test.api.jinselu.net/'
// 请求
const http = axios.create({
  baseURL: BASE_URL,
  timeout: 600000,
});
// 请求拦截
http.interceptors.request.use(
  config => {
    const { params } = config
    const tokenBo =useStorage('tokenBo') || {}
    config.params = {
      ...params,
      ...tokenBo
    }
    //请求头设置
    // let token = localStorage.getItem('token') || ''
    // config.headers.Authorization = token
    return config;
  },
  (err) => {
    console.log(err);
  }
);
// 响应拦截
http.interceptors.response.use(
  (res) => {
    if (res.status < 200 || res.status > 300) {
      ElMessage({
        message: res.data.msg,
        type: "warning",
      });
    }else  if(res.data.code == 2) {
      router.push('/login')
    }else if(res.data.code != 0){
      ElMessage({
        message: res.data.msg,
        type: "warning",
      })
    }
    return res.data;
  },
  (err) => {
    console.log(err,'error'.repeat(10));
  }
);
// 返出
export default http;
