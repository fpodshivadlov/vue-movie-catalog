import Vue from 'vue'
import Vuex from 'vuex'

import * as Types from './types'
import searchItems from "./modules/searchItems";

Vue.use(Vuex);

export default new Vuex.Store<Types.RootState>({
  modules: {
    searchItems,
  },
})
