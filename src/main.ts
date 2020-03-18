import Vue from 'vue'
import Vuex from 'vuex'
import VueMeta from 'vue-meta'

import './plugins/bootstrapVue'

import App from './views/_App/App.vue'
import './registerServiceWorker'
import router from './router'
import { createRootStore } from './store'

Vue.config.productionTip = false

Vue.use(Vuex);
const store = createRootStore();

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
