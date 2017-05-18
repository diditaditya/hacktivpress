import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import AddArticle from '@/components/AddArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/addArticle',
      name: 'AddArticle',
      component: AddArticle
    }
  ]
})
