import Vue from 'vue'
import App from './App'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store'
import router from './router/index'
Vue.config.productionTip = false;

Vue.use(Antd);
/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
});
