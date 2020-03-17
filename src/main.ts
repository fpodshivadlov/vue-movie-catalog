import Vue from 'vue'
import Vuex from 'vuex'

import './plugins/bootstrapVue'

import App from './views/_App/_App.vue'
import './registerServiceWorker'
import router from './router'
import { createRootStore } from './store'

Vue.config.productionTip = false

Vue.use(Vuex);
const store = createRootStore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
