import request from '../request'
export const accountLogin = data => request('check/EmployeeAccount/accountLogin',data,'post'); 
export const queryBNewIndexVo = data => request('/vo/BNewIndexVo/query',data,'post')