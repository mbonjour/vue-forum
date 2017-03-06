import Vue from 'vue'
import Router from 'vue-router'
import helloComponent from '@/components/helloComponent'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: helloComponent
  }]
})
