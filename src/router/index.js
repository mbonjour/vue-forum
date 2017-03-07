import Vue from 'vue'
import Router from 'vue-router'
import listPosts from '@/components/ListPosts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: listPosts
    },
    {
      path: '/post/:idPost',
      name: 'Post Summary',
      component: listPosts
    }
  ]
})
