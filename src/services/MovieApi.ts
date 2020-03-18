import axios from 'axios';
import { MoviesSearchResult, SearchRequest, MovieItem } from '../data/types';
import configuration from '../configuration';

const instance = axios.create({
  baseURL: configuration.VUE_APP_BACKEND_BASE_URL,
});

export default {
  getMovies: async (searchRequest?: SearchRequest) => {
    return await instance.get('/movies', {
      params: {
        sortBy: searchRequest?.sortBy,
        sortOrder: searchRequest?.sortOrder,
        search: searchRequest?.searchText,
        searchBy: searchRequest?.searchBy,
        filter: null,
        offset: 0,
        limit: searchRequest?.limit ?? 10,
      },
    }).then(response => {
      const result: MoviesSearchResult = {
        items: response.data.data,
        total: response.data.total,
      };
      return result;
    });
  },

  getMovie: async (id: string) => {
    return await instance.get(`/movies/${id}`).then(response => {
      const result: MovieItem = response.data;
      return result;
    });
  }
}