import Vue from 'vue'
import Router from 'vue-router'
import listPosts from '@/components/ListPosts'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Home
    },
    {
      path: '/posts',
      name: 'Post Summary',
      component: listPosts
    }
  ]
})

