import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Documents from '@/components/Documents'
import Login from '@/components/Login'
import CreateSchool from '@/components/CreateSchool'
import ViewSchool from '@/components/ViewSchool'
import Upload from '@/components/Upload'

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
    },
    {
      path: '/schools/add',
      name: 'schools-add',
      component: CreateSchool
    }
    ,
    {
      path: '/schools/:schoolId',
      name: 'school',
      component: ViewSchool
    }
    ,
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    } ,
    {
      path: '*',
      redirect:'home'
    }
  ]
})
