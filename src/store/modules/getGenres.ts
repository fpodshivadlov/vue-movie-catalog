import { Actions, Getters, Mutations, Module, createMapper } from 'vuex-smart-module';

import { MovieItem, SearchBy, SortBy, SortOrder, LoadStatus } from '@/types';
import MovieApi from '@/services/MovieApi';

import { setState } from '../helpers';

interface GenreData {
  name: string;
  items: MovieItem[];
}

class GetGenresState {
  genres: GenreData[] = [];

  status = LoadStatus.NotLoaded;
}

class GetGenresGetters extends Getters<GetGenresState> {
}

class GetGenresMutations extends Mutations<GetGenresState> {
  clearList() {
    setState(this.state, 'genres', []);
  }

  addToList(payload: GenreData) {
    this.state.genres.push(payload);
  }

  setStatus(payload: LoadStatus) {
    setState(this.state, 'status', payload);
  }
}

class GetGenresActions extends Actions<
  GetGenresState,
  GetGenresGetters,
  GetGenresMutations,
  GetGenresActions
> {
  reset() {
    this.commit('setStatus', LoadStatus.NotLoaded);
    this.commit('clearList');
  }

  async getItems(payload?: string[]) {
    this.commit('setStatus', LoadStatus.Loading);

    if (payload) {
      this.commit('clearList');

      const promises = payload.map(async (name) => {
        const result = await MovieApi.getMovies({
          searchBy: SearchBy.Genres,
          searchText: name,
          sortBy: SortBy.Rating,
          sortOrder: SortOrder.Desc,
          limit: 3,
        });

        if (!result.success) {
          return false;
        }

        this.commit('addToList', { name, items: result.data.items });
        return true;
      });

      const statuses = await Promise.all(promises);
      if (!statuses.every((x) => x)) {
        this.commit('setStatus', LoadStatus.Error);
        return;
      }
    }

    this.commit('setStatus', LoadStatus.Loaded);
  }
}

export const getGenres = new Module({
  namespaced: true,
  state: GetGenresState,
  mutations: GetGenresMutations,
  getters: GetGenresGetters,
  actions: GetGenresActions,
});

export const getGenresMapper = createMapper(getGenres);
