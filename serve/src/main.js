import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './plugins/element.js'
Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  element,
  render: h => h(App)
}).$mount('#app')
