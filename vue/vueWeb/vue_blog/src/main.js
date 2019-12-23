// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //引入element-ui模块
import 'element-ui/lib/theme-chalk/index.css' //引入element-ui模块
import api from './http'
import i18n from './i18n' //加入i18n
import store from './store'
import global from '@/utils/global'
import 'font-awesome/css/font-awesome.min.css'
import '@assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(api); //以 vue 插件的形式引入 axios，这样在其他地方就可通过 this.$api 调用相关的接口了
Vue.prototype.global = global
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
