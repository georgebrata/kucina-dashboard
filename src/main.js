// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import firebase from 'firebase'

// router setup
import routes from './routes/routes'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/NotificationPlugin'

// MaterialDashboard plugin
import MaterialDashboard from './material-dashboard'

import Chartist from 'chartist'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBx-3Tj4a0zi84nrThO1MzpdksUBeO06n4',
  authDomain: 'kucina-1511109893172.firebaseapp.com',
  databaseURL: 'https://kucina-1511109893172.firebaseio.com',
  projectId: 'kucina-1511109893172',
  storageBucket: 'kucina-1511109893172.appspot.com',
  messagingSenderId: '131535684600'
}
firebase.initializeApp(config)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: 'nav-item active'
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('Login')
  else if (!requiresAuth && currentUser) next('Dashboard')
  else next()
})

Vue.use(VueRouter)
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})
