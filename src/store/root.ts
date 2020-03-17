import { Module, createMapper, createStore } from 'vuex-smart-module'

import { searchMovies } from './modules/searchItems';
import { getMovie } from './modules/getItem';
import { getGenres } from './modules/getGenres';

export const root = new Module({
  modules: {
    searchMovies,
    getMovie,
    getGenres,
  },
});

export const rootMapper = createMapper(root);

export const createRootStore = () => createStore(root);
