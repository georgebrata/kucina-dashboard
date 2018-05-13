import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import UserProfile from '@/components/UserProfile'
import TableList from '@/components/TableList'
import Typography from '@/components/Typography'
import Icons from '@/components/Icons'
import Maps from '@/components/Maps'
import Notifications from '@/components/Notifications'

import LoginPage from '@/components/Login'

// GeneralViews
import NotFound from '@/components/GeneralViews/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/hello',
      name: 'Hello',
      component: TableList
    },
    {
      path: '/person',
      name: 'Person',
      component: UserProfile
    },
    {
      path: '/table',
      name: 'TableList',
      component: TableList
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    },
    { path: '*', component: NotFound }
  ],
  linkActiveClass: 'active'
})
