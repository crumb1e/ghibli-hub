import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './assets/tailwind.css'
import routes from './routes'

import 'nprogress/nprogress.css'
import http from './api'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.prototype.$axios = http

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
