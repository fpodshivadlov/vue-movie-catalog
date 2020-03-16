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

export interface SearchRequest {
  searchText: string;
  searchBy: SearchBy;
  sortBy?: SortBy;
}
