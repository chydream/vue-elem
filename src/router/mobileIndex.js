import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "group-foo" */'@/mobile/mvue/layout/Index')
    },
    {
      path: '/',
      name: 'Login',
      component: () => import(/* webpackChunkName: "group-foo" */'@/mobile/login/Login')
    },
    {
      path: '*',
      redirect: '/error/404'
    },
    {
      path: '/error/403',
      name: 'Error403',
      component: () => import(/* webpackChunkName: "group-foo" */'@/mobile/error/403')
    },
    {
      path: '/error/404',
      name: 'Error404',
      component: () => import(/* webpackChunkName: "group-foo" */'@/mobile/error/404')
    }
  ]
})
export default router

router.beforeEach((to, from, next) => {
  next()
})
