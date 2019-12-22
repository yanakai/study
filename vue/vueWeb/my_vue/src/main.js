// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'  //引入element-ui模块
import 'element-ui/lib/theme-chalk/index.css'  //引入element-ui模块
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'   //引入axios 模块
import VueAxios from 'vue-axios'  // 引入axios 模块

Vue.config.productionTip = false
Vue.use(ElementUI) //引入element-ui模块
Vue.use(VueAxios,axios) //引入axios 模块
import './components/iconSvg' // iconSvg

// 创建全局过滤器
import * as custom from './utils/util'
Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key])
})

// i18n国际化
import i18n from "@/lang";

Vue.prototype.$axios = axios
axios.interceptors.response.use(res => {
    if (!res.data)
        return res
    if (!res.data.errorCode || res.data.errorCode != 302)
        return res
    sessionStorage.removeItem('user')
    location.reload()
    return res
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,  // 便于可以直接在组件中通过this.$i18n使用，也可以按需引用
  components: { App },
  template: '<App/>'
})
