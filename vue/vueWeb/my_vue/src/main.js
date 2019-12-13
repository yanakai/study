// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'  //引入element-ui模块
import 'element-ui/lib/theme-chalk/index.css'  //引入element-ui模块
import axios from 'axios'   //引入axios 模块
import VueAxios from 'vue-axios'  // 引入axios 模块

Vue.config.productionTip = false
Vue.use(ElementUI) //引入element-ui模块
Vue.use(VueAxios,axios) //引入axios 模块

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
