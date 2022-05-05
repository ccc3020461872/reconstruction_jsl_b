// 封装请求参数
import http from './config'
function request(url,data,method="get") {
    return http({
        method,
        url,
        params: data,
    })
}
export default request