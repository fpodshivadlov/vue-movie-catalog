import { Module } from 'vuex';

import MovieApi from '@/services/MovieApi';
import { RootState, LoadStatus, GetGenresState, GenreData } from '../types';
import { initNames } from '../helpers';
import { SearchBy, SortBy, SortOrder } from '@/data/types';

export const mutations = initNames({
  clearList: null,
  addToList: null,
  setStatus: null,
});

export const actions = initNames({
  getItems: null,
});

export const module: Module<GetGenresState, RootState> = {
  namespaced: true,
  state: {
    items: [],
    status: LoadStatus.NotLoaded,
  },
  mutations: {
    [mutations.clearList]: (state) => {
      state.items = [];
    },
    [mutations.addToList]: (state, payload: GenreData) => {
      state.items.push(payload);
    },
    [mutations.setStatus]: (state, payload) => {
      state.status = payload;
    },
  },
  actions: {
    [actions.getItems]: async (store, payload: string[]) => {
      store.commit(mutations.setStatus, LoadStatus.Loading);

      if (payload) {
        store.commit(mutations.clearList);
        
        const promises = payload.map(async (name) => {
          const result = await MovieApi.getMovies({
            searchBy: SearchBy.Genres,
            searchText: name,
            sortBy: SortBy.Rating,
            sortOrder: SortOrder.Desc,
            limit: 3,
          });

          store.commit(mutations.addToList, {
            name,
            items: result.items,
          } as GenreData);
        });

        await Promise.all(promises);
      }

      store.commit(mutations.setStatus, LoadStatus.Loaded);
    },
  },
};