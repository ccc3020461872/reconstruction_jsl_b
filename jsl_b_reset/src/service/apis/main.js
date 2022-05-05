import request from '../request'
export const accountLogin = data => request('check/EmployeeAccount/accountLogin',data,'post'); 