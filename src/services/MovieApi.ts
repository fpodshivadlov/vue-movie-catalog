import axios from 'axios';
import { MoviesSearchResult, SearchRequest, SortBy } from '../data/types';

const baseUrl = "http://react-cdp-api.herokuapp.com/";
const instance = axios.create({
  baseURL: baseUrl,
});

export default {
  getMovies: async (searchRequest: SearchRequest) => {
    return await instance.get('/movies', {
      params: {
        sortBy: searchRequest?.sortBy,
        sortOrder: searchRequest?.sortOrder,
        search: searchRequest?.searchText,
        searchBy: searchRequest?.searchBy,
        filter: null,
        offset: 0,
        limit: 10,
      },
    }).then(response => {
      const result: MoviesSearchResult = {
        items: response.data.data,
        total: response.data.total,
      };
      return result;
    });
  }
}