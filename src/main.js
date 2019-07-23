import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router/index'
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
});
