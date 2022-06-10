export const homeChildren = [
  {
    path: "",
    component: () => import("@/views/container"),
    meta: {
      title: "首页",
    },
    children: [
     {
      path: '',
      component:() => import("@/views/Home/main/main"),
      meta: {
        title: ''
      },
     },
       { 
    path: '/noticeList',
    component:() => import("@/views/Home/main/notice/noticeList"),
    meta: {
      title: '通知公告'
    },
  },]
  },

  {
    path: "orderMange",
    name: "orderMange",
    component: () => import("@/views/Home/orderMange/orderMange"),
    meta: {
      title: "订单管理",
    },
    children: [
      {
        path: "noticeList",
        name: "noticeList",
        component: () => import("@/views/Home/main/notice/noticeList"),
      },
    ],
   
  },
];
export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/login"),
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home/home"),
    children: homeChildren,
  },
];
