import Vue from 'vue'
import Vuex from 'vuex'

import * as Types from './types'
import { mapAllModulesNames } from './helpers';
import * as searchItems from './modules/searchItems';
import * as getItem from './modules/getItem';

export const mutations = mapAllModulesNames({
  searchItems: searchItems.mutations,
  getItem: getItem.actions,
});

export const actions = mapAllModulesNames({
  searchItems: searchItems.actions,
  getItem: getItem.actions,
});

Vue.use(Vuex);

export default new Vuex.Store<Types.RootState>({
  modules: {
    searchItems: searchItems.module,
    getItem: getItem.module,
  },
});

