import Vue from 'vue'

import './plugins/bootstrapVue'

import App from './views/_App/_App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
