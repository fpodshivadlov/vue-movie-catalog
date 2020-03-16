import Vue from 'vue'
import Vuex from 'vuex'

import * as Types from './types'
import { mapAllModulesNames } from './helpers';
import * as searchItems from './modules/searchItems';

export const mutations = mapAllModulesNames({
  searchItems: searchItems.mutations,
});

export const actions = mapAllModulesNames({
  searchItems: searchItems.actions,
});

Vue.use(Vuex);

export default new Vuex.Store<Types.RootState>({
  modules: {
    searchItems: searchItems.module,
  },
});

