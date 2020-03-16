import { MoviesSearchResult } from '../data/types';

export enum LoadStatus {
  NotLoaded = "NotLoaded",
  Loading = "Loading",
  Loaded = "Loaded",
}

export interface SearchMoviesState {
  result: MoviesSearchResult;
  status: LoadStatus;
}

export interface RootState {
  searchItems: SearchMoviesState;
}
