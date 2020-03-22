import axios from 'axios';

import { MoviesSearchResult, SearchRequest, MovieItem, LoadResponse } from '../types';
import configuration from '../configuration';

const instance = axios.create({
  baseURL: configuration.VUE_APP_BACKEND_BASE_URL,
});

export default {
  getMovies: async (searchRequest?: SearchRequest): Promise<LoadResponse<MoviesSearchResult>> => {
    try {
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

      return {
        success: true,
        data: {
          items: response.data.data,
          total: response.data.total,
          limit: response.data.limit,
          offset: response.data.offset,
        },
      };
    } catch {
      return { success: false };
    }
  },

  getMovie: async (id: string): Promise<LoadResponse<MovieItem>> => {
    try {
      const response = await instance.get(`/movies/${id}`);

      return {
        success: true,
        data: response.data,
      };
    } catch {
      return { success: false };
    }
  },
};
