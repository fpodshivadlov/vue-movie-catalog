import Vue from 'vue';
import Vuex, { Module } from 'vuex';

import MovieApi from '@/services/MovieApi';
import { RootState, SearchMoviesState } from '../types';
import { initNames } from '../helpers';

export const mutations = initNames({
  updateSearchResult: null,
});

export const actions = initNames({
  getItems: null,
});

const module: Module<SearchMoviesState, RootState> = {
  namespaced: true,
  state: {
    result: {
      items: [],
      total: 0,
    }
  },
  mutations: {
    [mutations.updateSearchResult]: (state, payload) => {
      state.result = payload;
    },
  },
  actions: {
    [actions.getItems]: async (store, injectee) => {
      const searchResult = await MovieApi.getMovies();
      store.commit(mutations.updateSearchResult, searchResult);
    },
  },
};

export default module;
