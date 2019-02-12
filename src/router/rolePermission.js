import router from './index'
import whiteList from './whiteList'
import store from '../store'
import {decryptStr, isLogin} from '@/util/tool'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  showSpinner: false
})
// 路由权限校验
var permissionList = []
function initRoute (rt) {
  return new Promise((resolve) => {
    if (permissionList.length == 0) {
      store.dispatch('GetMenu').then((res) => {
        var arrList = []  
        res.forEach(function (item) {
          var o = {}
          o.label = item.label
          o.permission = item.permission
          arrList.push(item)
          if (item.children.length > 0 && item.children) {
            var itemChild = item.children
            itemChild.forEach(function (item) {
                var oChild = {}
                oChild.label = item.label
                oChild.permission = item.permission
                arrList.push(item)
            })
          }
        })
        permissionList = arrList
        arrList.forEach(function (v) {
          let routeItem = rt.match(v.href)
          if (routeItem) {
            routeItem.meta.permission = v.permission ? v.permission : []
            routeItem.meta.label = v.label
          }
        })
        resolve()
      })
    } else {
      resolve()
    }
  })
}

// 路由生命周期
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (store.getters.token) {
    if (to.path == '/login') {
      next({path: '/index/home', replace: true})
    } else if (to.path.indexOf('error') >= 0) {
      next()
    } else {
      next()
      // console.log(to)
      var params = {
        label: to.name,
        value: to.path,
        query: to.query
      }
      store.commit('common/ADD_TAG', params)
      // initRoute(router).then(res => {
      //   let isPermission = false
      //   permissionList.forEach((v) => {
      //     if (v.href == to.path) {
      //       isPermission = true
      //     }
      //   })
      //   if (!isPermission) {
      //     if (to.query.p != undefined) {
      //       var arr = to.path.split('/')
      //       var len = arr.length
      //       var pathStr = decryptStr(to.query.p)
      //       var pathLast = arr[len - 1]
      //       if (pathStr == pathLast) {
      //         next()
      //       } else {
      //         next({ path: '/403', replace: true })
      //       }
      //     } else {
      //       next({path: 'menu/error/403', replace: true})
      //     }    
      //   } else {
      //     next()
      //   }
      // })
    }
  } else {
    if (whiteList.indexOf(to.path) >= 0) {
      next()
    } else {
      next({
        path: '/login',
        replace: true
      })
    }  
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})
