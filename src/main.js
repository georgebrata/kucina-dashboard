import Vue from "vue";
import App from "./App";
import router from "./router/index";
import firebase from "firebase";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

var config = {
  apiKey: "AIzaSyBx-3Tj4a0zi84nrThO1MzpdksUBeO06n4",
  authDomain: "kucina-1511109893172.firebaseapp.com",
  databaseURL: "https://kucina-1511109893172.firebaseio.com",
  projectId: "kucina-1511109893172",
  storageBucket: "kucina-1511109893172.appspot.com",
  messagingSenderId: "131535684600"
};

firebase.initializeApp(config);

Vue.use(PaperDashboard);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
