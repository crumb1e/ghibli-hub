import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import 'nprogress/nprogress.css'
import http from './api'

Vue.config.productionTip = false

Vue.prototype.$axios = http

new Vue({
  render: h => h(App),
}).$mount('#app')
