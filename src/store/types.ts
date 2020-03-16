import { MoviesSearchResult, MovieItem } from '../data/types';

export enum LoadStatus {
  NotLoaded = "NotLoaded",
  Loading = "Loading",
  Loaded = "Loaded",
}

export interface SearchMoviesState {
  result: MoviesSearchResult;
  status: LoadStatus;
}

export interface GetMovieState {
  item?: MovieItem;
  status: LoadStatus;
}

export interface RootState {
  searchItems: SearchMoviesState;
  getItem: GetMovieState;
}
