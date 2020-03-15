import { MovieItem, MoviesSearchResult } from '../data/types';

export interface SearchMoviesState {
  result: MoviesSearchResult;
}

export interface RootState {
  searchItems: SearchMoviesState;
}
