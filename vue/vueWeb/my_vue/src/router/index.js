import Vue from 'vue'
import Router from 'vue-router'
import CopClass from '@/components/EnterPage'
import userList from '@/components/UserList'
import Index from '@/page/index'

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
      path: "/index/",
      component: Index
    }
  ]
})
