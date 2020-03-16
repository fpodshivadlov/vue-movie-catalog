import { Module } from 'vuex';

import MovieApi from '@/services/MovieApi';
import { RootState, LoadStatus, GetMovieState } from '../types';
import { initNames } from '../helpers';

export const mutations = initNames({
  updateItem: null,
  setStatus: null,
});

export const actions = initNames({
  getItem: null,
});

export const module: Module<GetMovieState, RootState> = {
  namespaced: true,
  state: {
    status: LoadStatus.NotLoaded,
  },
  mutations: {
    [mutations.updateItem]: (state, payload) => {
      state.item = payload;
    },
    [mutations.setStatus]: (state, payload) => {
      state.status = payload;
    },
  },
  actions: {
    [actions.getItem]: async (store, payload: string) => {
      store.commit(mutations.setStatus, LoadStatus.Loading);
      const item = await MovieApi.getMovie(payload);

      store.commit(mutations.updateItem, item);
      store.commit(mutations.setStatus, LoadStatus.Loaded);
    },
  },
};
