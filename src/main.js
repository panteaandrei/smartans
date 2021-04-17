import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


Vue.prototype.$apiUrl = process.env.VUE_APP_BACKEND_API_URL;
Vue.prototype.$andrei = process.env.VUE_APP_ANDREI;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
