import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '',
    meta: {}
  }
]

const router = new Router({
  mode: 'history',
  scrollBehavior: () => {
    return { y:0 }
  },
  routes: constantRoutes
})

export default router