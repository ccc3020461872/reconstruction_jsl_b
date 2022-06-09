export const homeChildren = [
    {
      path: '',
      component: () => import ('@/views/Home/main/main'),
      meta: {
         title: '首页' 
      }
    },
    {
      path: 'orderMange',
      name: 'orderMange',
      component: () => import ('@/views/Home/orderMange/orderMange'),
      meta: {
          title: '订单管理'
      }
    },
   
  ]
export default   [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/login')
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import ('@/views/Home/home'),
      children: homeChildren
    }
  ]
  