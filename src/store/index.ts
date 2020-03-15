import Vue from 'vue'
import Vuex from 'vuex'

import * as Types from './types'
import items from '../data/movies';

Vue.use(Vuex)

export default new Vuex.Store<Types.RootState>({
  state: {
    items,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
