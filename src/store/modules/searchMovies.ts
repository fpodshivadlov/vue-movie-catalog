import { Actions, Getters, Mutations, Module, createMapper } from 'vuex-smart-module';

import { SearchRequest, MoviesSearchResult, LoadStatus } from '@/types';
import MovieApi from '@/services/MovieApi';

import { setState } from '../helpers';

class SearchMoviesState {
  result: MoviesSearchResult = {
    items: [],
    total: 0,
    offset: 0,
  };

  status = LoadStatus.NotLoaded;
}

class SearchMoviesGetters extends Getters<SearchMoviesState> {
}

class SearchMoviesMutations extends Mutations<SearchMoviesState> {
  updateSearchResult(payload: MoviesSearchResult) {
    setState(this.state, 'result', payload);
  }

  setStatus(payload: LoadStatus) {
    setState(this.state, 'status', payload);
  }
}

class SearchMoviesActions extends Actions<
  SearchMoviesState,
  SearchMoviesGetters,
  SearchMoviesMutations,
  SearchMoviesActions
> {
  async getItems(payload: SearchRequest) {
    this.commit('setStatus', LoadStatus.Loading);
    const result = await MovieApi.getMovies(payload);
    if (!result.success) {
      this.commit('setStatus', LoadStatus.Error);
      return;
    }

    this.commit('updateSearchResult', result.data);
    this.commit('setStatus', LoadStatus.Loaded);
  }
}

export const searchMovies = new Module({
  namespaced: true,
  state: SearchMoviesState,
  mutations: SearchMoviesMutations,
  getters: SearchMoviesGetters,
  actions: SearchMoviesActions,
});

export const searchMoviesMapper = createMapper(searchMovies);
