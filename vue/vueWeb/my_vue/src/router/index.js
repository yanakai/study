import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Index from '@/page/index'
import Main from '@/page/main'
import Cookies from "js-cookie" //引入js-cookie存放登录信息 例如当前登录用户
import NotFound from '@/page/Error/404' //404页面


Vue.use(Router)

const router = new Router({
  mode: 'history', // 去掉路由地址的#
  routes: [
    {
      path: "/",
      name: '首页',
      component: Index,
      // 嵌套路由
      children: [
        {
          // 这里不设置值，是把main作为默认页面
          path: '', 
          name: '系统介绍页面',
          component: Main
        }
      ]
    },
    {
      path: '/login',
      name: '登录页面',
      component: Login
    },{
      path: '/404',
      name: '错误页面',
      component: NotFound
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let token = Cookies.get('token')
  let userName = sessionStorage.getItem('user')
  if (to.path === '/login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if(token) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (!token) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      next({ path: '/login' })
    } else {
      // 加载动态菜单和路由
      //addDynamicMenuAndRoutes(userName, to, from)
      next()
    }
  }
})

/**
* 加载动态菜单和路由
*/
function addDynamicMenuAndRoutes(userName, to, from) {
  // 处理IFrame嵌套页面
  handleIFrameUrl(to.path)
  if(store.state.app.menuRouteLoaded) {
    console.log('动态菜单和路由已经存在.')
    return
  }
  api.menu.findNavTree({'userName':userName})
  .then(res => {
    // 添加动态路由
    let dynamicRoutes = addDynamicRoutes(res.data)
    // 处理静态组件绑定路由
    handleStaticComponent(router, dynamicRoutes)
    router.addRoutes(router.options.routes)
    // 保存加载状态
    store.commit('menuRouteLoaded', true)
    // 保存菜单树
    store.commit('setNavTree', res.data)
  }).then(res => {
    api.user.findPermissions({'name':userName}).then(res => {
      // 保存用户权限标识集合
      store.commit('setPerms', res.data)
    })
  })
  .catch(function(res) {
  })
}

export default router
