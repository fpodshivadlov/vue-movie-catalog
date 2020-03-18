import { readFileSync } from 'fs';

import { MovieItem, SortOrder, SearchBy, SortBy } from '../types';
import { collectionFind, paginate } from '../utils';

const rawData = readFileSync('data/movies.json', 'utf8');
const movies = JSON.parse(rawData);

export default class MoviesRepository {
  private movies: MovieItem[] = movies;

  getMovies = (
    searchText: string,
    searchBy: SearchBy,
    sortBy: SortBy,
    sortOrder: SortOrder,
    limit: number,
    offset: number,
  ) => {
    const items = collectionFind(this.movies, searchBy, searchText, sortBy, sortOrder == SortOrder.Asc);

    return paginate(items, limit, offset);
  }

  getMovie = (id: number): MovieItem | undefined => {
    return this.movies.find(x => x.id === id);
  };
}
