import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'index',
    component: () => import('../views/index.vue'),
    children:[
      {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        component:()=>import('../views/Home.vue')
      },
      {
        path:'/Me',
        component:()=>import('../views/Me.vue')
      },
      {
        path:'/Order',
        component:()=>import('../views/Order.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('../views/Address.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../views/City.vue')
  },
  // {
  //   path:'/home',
  //   name:'Home',
  //   component:Home,
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.ele_login ? true : false
//   if (to.path == '/login') {
//     next()
//   } else {
//     // 是否在登录状态下
//     isLogin ? next() : next('/login')
//   }
// })

export default router
