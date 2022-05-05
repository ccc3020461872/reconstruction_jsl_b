import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
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
    children: [
      {
        path: '',
        component: () => import ('@/views/Home/orderMange/orderMange')
      },
      {
        path: 'orderMange',
        name: 'orderMange',
        component: () => import ('@/views/Home/orderMange/orderMange')
      },
     
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
