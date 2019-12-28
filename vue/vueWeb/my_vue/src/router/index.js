import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Main from '@/page/main'
import userList from '@/page/UserList' //用户列表
import roleList from '@/page/RoleList' //角色列表
import articleList from '@/page/ArticleList' //文章列表
import columnList from '@/page/ColumnList' //文章列表


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: Index,
      redirect:"Main",//重定向，第一次进入就进入Main，不添加的话第一次进入右侧是空白
      // 嵌套路由
      children: [
        {
          // 这里不设置值，是把main作为默认页面
          path: '/', 
          name: 'Main',
          component: Main
        },{
          path: '/user/list/',
          name: 'userDataList',
          component: userList
        },{
          path: '/role/list/',
          name: 'roleDataList',
          component: roleList
        },{
          path: '/article/list/',
          name: 'articleDataList',
          component: articleList
        },{
          path: '/column/list/',
          name: 'columnDataList',
          component: columnList
        }
      ]
    }
  ]
})
