import { Module, createMapper, createStore } from 'vuex-smart-module';

import { searchMovies } from './modules/searchMovies';
import { getMovie } from './modules/getMovie';
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
