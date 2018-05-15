import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'
import LoginPage from '@/pages/Layout/LoginPage.vue'
import RegisterPage from '@/pages/Layout/RegisterPage.vue'

import Dashboard from '@/pages/Dashboard.vue'
import Dishes from '@/pages/Dishes.vue'
import Menu from '@/pages/Menu.vue'
import Drink from '@/pages/Drink.vue'
import Orders from '@/pages/Orders.vue'


import UserProfile from '@/pages/UserProfile.vue'
import TableList from '@/pages/TableList.vue'
import Typography from '@/pages/Typography.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'dishes',
        name: 'Dishes',
        component: Dishes
      },
      {
        path: 'menu',
        name: 'Menu',
        component: Menu
      },
      {
        path: 'drink',
        name: 'Drink',
        component: Drink
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders
      },
      {
        path: 'user',
        name: 'User Profile',
        component: UserProfile
      },
      {
        path: 'table',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        meta: {
          hideFooter: true
        },
        component: Maps

      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: RegisterPage
  },
]

export default routes
