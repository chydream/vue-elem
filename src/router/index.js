import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home/Home'
import Layout from '@/containers/Home/Container'
import Demo from '@/containers/Home/Demo'
import Form from '@/containers/Home/Form'
import Input from '@/containers/Home/Input'
import Others from '@/containers/Home/Others'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/others',
      name: 'Others',
      component: Others
    }
  ]
})
