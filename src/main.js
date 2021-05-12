import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/js/all.min'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './assets/css/global.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false


Vue.prototype.$apiUrl = process.env.VUE_APP_BACKEND_API_URL;
Vue.prototype.$andrei = process.env.VUE_APP_ANDREI;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
