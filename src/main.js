import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import api from './api/api'
import echart from 'echarts'

import './plugins/iview.js'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype,'$api',{value:api})
Object.defineProperty(Vue.prototype,'$echarts',{value:echart})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
