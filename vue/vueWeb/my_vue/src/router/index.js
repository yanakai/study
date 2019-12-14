import Vue from 'vue'
import Router from 'vue-router'
import CopClass from '@/components/EnterPage'
import userList from '@/components/UserList'
import Index from '@/page/index'
import Main from '@/page/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/enter/',
      name: 'CopName',
      component: CopClass
    },
    {
      path: "/",
      component: Index,
      redirect:"Main",//重定向，第一次进入就进入Main，不添加的话第一次进入右侧是空白
      // 嵌套路由
      children: [{
        // 这里不设置值，是把main作为默认页面
        path: '/', 
        name: 'Main',
        component: Main
      },{
        path: '/user/list/',
        name: 'userDataList',
        component: userList
      }]
    }
  ]
})
