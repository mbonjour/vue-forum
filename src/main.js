// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/store'
import router from './router'
import axios from 'axios'
import lodash from 'lodash'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$_ = lodash

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
