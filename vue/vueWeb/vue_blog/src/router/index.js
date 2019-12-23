import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Index from '@/views/Index'
import NotFound from '@/views/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
    ,{
      path: '/404',
      name: 'notFound',
      component: NotFound
    }
  ]
})
