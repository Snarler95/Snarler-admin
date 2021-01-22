import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '',
    meta: {}
  },
  {
    path: '/SystemMangement',
    component: Layout,
    children: [
      {
        path: '/SystemMangement/UserManagement',
        name: 'UserManagement',
        component: () => import('../views/SystemMangement/UserManagement/index')
      },
      {
        path: '/SystemMangement/DepartmentManagement',
        name: 'DepartmentManagement',
        component: () => import('../views/SystemMangement/DepartmentManagement/index')
      },
      {
        path: '/SystemMangement/RoleManagement',
        name: 'RoleManagement',
        component: () => import('../views/SystemMangement/RoleManagement/index')
      },
      {
        path: '/SystemMangement/MenuManagement',
        name: 'MenuManagement',
        component: () => import('../views/SystemMangement/MenuManagement/index')
      }
    ]
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