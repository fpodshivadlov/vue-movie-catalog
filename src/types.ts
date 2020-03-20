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

export interface MoviesSearchResult {
  items: MovieItem[];
  total: number;
  offset: number;
  limit?: number;
}

export enum SearchBy {
  Title = 'title',
  Genres = 'genres',
}

export enum SortBy {
  Title = 'title',
  ReleaseDate = 'release_date',
  Rating = 'vote_average',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export interface SearchRequest {
  searchText: string;
  searchBy: SearchBy;
  sortBy: SortBy;
  sortOrder: SortOrder;
  limit?: number;
  offset?: number;
}
