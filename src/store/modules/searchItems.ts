import { Actions, Getters, Mutations, Module, createMapper } from 'vuex-smart-module'

import { SearchRequest, MoviesSearchResult } from '@/data/types';
import MovieApi from '@/services/MovieApi';

import { LoadStatus } from '../types';
import { setState } from '../helpers';

class SearchMoviesState {
  result: MoviesSearchResult = {
    items: [],
    total: 0,
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
  async getItems(payload?: SearchRequest) {
    this.commit("setStatus", LoadStatus.Loading);
    const searchResult = await MovieApi.getMovies(payload);

    this.commit("updateSearchResult", searchResult);
    this.commit("setStatus", LoadStatus.Loaded);
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
