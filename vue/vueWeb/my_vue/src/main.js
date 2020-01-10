// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'  //引入element-ui模块
import 'element-ui/lib/theme-chalk/index.css'  //引入element-ui模块
import 'font-awesome/css/font-awesome.min.css'
import api from './http'
import store from './store' //存放全局的参数值
import i18n from './i18n' //加入i18n
import global from '@/utils/global' //加入全局变量
import axios from 'axios'   //引入axios 模块
import VueAxios from 'vue-axios'  // 引入axios 模块

Vue.config.productionTip = false
Vue.use(ElementUI) //引入element-ui模块
Vue.use(api); //以 vue 插件的形式引入 axios，这样在其他地方就可通过 this.$api 调用相关的接口了
Vue.prototype.global = global
Vue.use(VueAxios,axios) //引入axios 模块、

// 创建全局过滤器
import * as custom from './utils/util'
Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,//定义全局变量
  components: { App },
  template: '<App/>'
})
