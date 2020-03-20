import axios from 'axios';
import { MoviesSearchResult, SearchRequest, MovieItem } from '../types';
import configuration from '../configuration';

const instance = axios.create({
  baseURL: configuration.VUE_APP_BACKEND_BASE_URL,
});

export default {
  getMovies: async (searchRequest?: SearchRequest) => {
    const response = await instance.get('/movies', {
      params: {
        sortBy: searchRequest?.sortBy,
        sortOrder: searchRequest?.sortOrder,
        search: searchRequest?.searchText,
        searchBy: searchRequest?.searchBy,
        filter: null,
        offset: searchRequest?.offset ?? 0,
        limit: searchRequest?.limit ?? 10,
      },
    });

    const result: MoviesSearchResult = {
      items: response.data.data,
      total: response.data.total,
      limit: response.data.limit,
      offset: response.data.offset,
    };

    return result;
  },

  getMovie: async (id: string) => {
    const response = await instance.get(`/movies/${id}`);

    const result: MovieItem = response.data;
    return result;
  },
};
