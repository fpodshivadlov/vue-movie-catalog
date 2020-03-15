import { MoviesSearchResult } from '../data/types';

import { mapAllModulesNames } from './helpers';
import * as searchItems from './modules/searchItems';

export const mutations = mapAllModulesNames({
  searchItems: searchItems.mutations,
});

export const actions = mapAllModulesNames({
  searchItems: searchItems.actions,
});

export interface SearchMoviesState {
  result: MoviesSearchResult;
}

export interface RootState {
  searchItems: SearchMoviesState;
}
