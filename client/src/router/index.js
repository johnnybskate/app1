import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Documents from '@/components/Documents'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/documents',
      name: 'documents',
      component: Documents
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
