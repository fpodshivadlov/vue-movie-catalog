import Vue from 'vue';
import Vuex, { Module } from 'vuex';

import MovieApi from '@/services/MovieApi';
import { RootState, SearchMoviesState } from '../types';

const module: Module<SearchMoviesState, RootState> = {
  namespaced: true,
  state: {
    result: {
      items: [],
      total: 0,
    }
  },
  mutations: {
    updateSearchResult: (state, payload) => {
      state.result = payload;
    },
  },
  actions: {
    getItems: async (store, injectee) => {
      const searchResult = await MovieApi.getMovies();
      store.commit("updateSearchResult", searchResult);
    },
  },
};

export default module;
