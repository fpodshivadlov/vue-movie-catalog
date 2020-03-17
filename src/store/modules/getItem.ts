import Vue from 'vue';
import { Module } from 'vuex';

import MovieApi from '@/services/MovieApi';
import { initNames, nameOf } from '../helpers';
import { RootState, LoadStatus, GetMovieState } from '../types';

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
    [mutations.updateItem]: function(state, payload) {
      Vue.set(state, nameOf<GetMovieState>('item'), payload);
    },
    [mutations.setStatus]: (state, payload) => {
      Vue.set(state, nameOf<GetMovieState>('status'), payload);
    },
  },
  actions: {
    [actions.getItem]: async (store, payload: string) => {
      store.commit(mutations.setStatus, LoadStatus.Loading);
      const item = await MovieApi.getMovie(payload);

      store.commit(mutations.updateItem, item);
      store.commit(mutations.setStatus, LoadStatus.Loaded);

      // ToDo: investigate for types names
      store.dispatch("getGenres/getItems", item.genres, { root: true });
    },
  },
};
