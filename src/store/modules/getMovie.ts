import { Store } from 'vuex';
import { Actions, Getters, Mutations, Module, createMapper, Context } from 'vuex-smart-module';

import { MovieItem, LoadStatus } from '@/types';
import MovieApi from '@/services/MovieApi';

import { getGenres } from './getGenres';
import { setState } from '../helpers';

class GetMovieState {
  item: MovieItem | null = null;

  status = LoadStatus.NotLoaded;
}

class GetMovieGetters extends Getters<GetMovieState> {
}

class GetMovieMutations extends Mutations<GetMovieState> {
  updateItem(payload: MovieItem) {
    setState(this.state, 'item', payload);
  }

  setStatus(payload: LoadStatus) {
    setState(this.state, 'status', payload);
  }
}

class GetMovieActions extends Actions<
  GetMovieState,
  GetMovieGetters,
  GetMovieMutations,
  GetMovieActions
> {
  getGenres!: Context<typeof getGenres>;

  $init(store: Store<unknown>): void {
    this.getGenres = getGenres.context(store);
  }

  async getItem(payload: string) {
    this.commit('setStatus', LoadStatus.Loading);
    this.getGenres.dispatch('reset');

    const result = await MovieApi.getMovie(payload);
    if (!result.success) {
      this.commit('setStatus', LoadStatus.Error);
      return;
    }

    this.commit('updateItem', result.data);
    this.commit('setStatus', LoadStatus.Loaded);

    this.getGenres.dispatch('getItems', result.data.genres);
  }
}

export const getMovie = new Module({
  namespaced: true,
  state: GetMovieState,
  mutations: GetMovieMutations,
  getters: GetMovieGetters,
  actions: GetMovieActions,
});

export const getMovieMapper = createMapper(getMovie);
