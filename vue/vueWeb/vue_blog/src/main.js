// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //引入element-ui模块
import 'element-ui/lib/theme-chalk/index.css' //引入element-ui模块
import api from './http/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(api); //以 vue 插件的形式引入 axios，这样在其他地方就可通过 this.$api 调用相关的接口了

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
