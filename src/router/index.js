import Vue from 'vue'
import Router from 'vue-router'
import listPosts from '@/components/listPostsComponent'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Dashboard',
    component: listPosts
  }]
})
