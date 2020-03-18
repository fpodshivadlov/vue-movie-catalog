export interface MovieItem {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export enum SearchBy {
  Title = "title",
  Genres = "genres",
}

export enum SortBy {
  Title = "title",
  ReleaseDate = "release_date",
  Rating = "vote_average",
}

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export interface SearchRequestParams {
  search: string;
  searchBy: SearchBy;
  sortBy: SortBy;
  sortOrder: SortOrder;
  limit: string;
  offset: string;
}

export interface GetRequestParams {
  id: string;
}

export interface ParamsDictionary {
  [ key: string ]: string;
}

export interface MoviesSearchResult {
  items: MovieItem[];
  total: number;
}
