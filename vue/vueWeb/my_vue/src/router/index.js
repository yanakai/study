import Vue from 'vue'
import Router from 'vue-router'
import CopClass from '@/components/EnterPage'
import userList from '@/components/UserList'
import Index from '@/page/index'
import Main from '@/page/main'
import User from '@/page/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/enter/',
      name: 'CopName',
      component: CopClass
    },
    {
      path: "/user/list/",
      name: "userDataList",
      component: userList
    },
    {
      path: "/",
      component: Index,
      // 嵌套路由
      children: [{
        // 这里不设置值，是把main作为默认页面
        path: '/', 
        name: 'Main',
        component: Main
      },{
        path: '/user',
        name: 'User',
        component: User
      }]
    }
  ]
})
