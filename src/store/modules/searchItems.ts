import { Module } from 'vuex';

import { SearchRequest } from '@/data/types';
import MovieApi from '@/services/MovieApi';
import { RootState, SearchMoviesState, LoadStatus } from '../types';
import { initNames } from '../helpers';

export const mutations = initNames({
  updateSearchResult: null,
  setStatus: null,
});

export const actions = initNames({
  getItems: null,
});

export const module: Module<SearchMoviesState, RootState> = {
  namespaced: true,
  state: {
    result: {
      items: [],
      total: 0,
    },
    status: LoadStatus.NotLoaded,
  },
  mutations: {
    [mutations.updateSearchResult]: (state, payload) => {
      state.result = payload;
    },
    [mutations.setStatus]: (state, payload) => {
      state.status = payload;
    },
  },
  actions: {
    [actions.getItems]: async (store, payload: SearchRequest) => {
      store.commit(mutations.setStatus, LoadStatus.Loading);
      const searchResult = await MovieApi.getMovies(payload);

      store.commit(mutations.updateSearchResult, searchResult);
      store.commit(mutations.setStatus, LoadStatus.Loaded);
    },
  },
};
