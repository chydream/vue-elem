import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component:  () => import(/* webpackChunkName: "group-foo" */'../themes/cvue/views/item/Dialog')
    },
    {
      path: '/',
      name: 'Login',
      component:  () => import(/* webpackChunkName: "group-foo" */'../themes/cvue/views/item/Dialog')
    }
  ]
})
