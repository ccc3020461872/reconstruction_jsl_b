import request from '../request'
export const accountLogin = data => request('check/EmployeeAccount/accountLogin',data,'post');  //登录
export const queryBNewIndexVo = data => request('/vo/BNewIndexVo/query',data,'post'); //获取首页信息
export const queryNotice =  data => request('/deer/Notice/query',data,'post'); //获取通知公告列表