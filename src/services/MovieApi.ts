import axios from 'axios';
import { MoviesSearchResult } from '../data/types';

const baseUrl = "http://react-cdp-api.herokuapp.com/";
const instance = axios.create({
  baseURL: baseUrl,
});

export default {
  getMovies: async () => {
    return await instance.get('/movies', {
      params: {
        sortBy: "title",
        sortOrder: "asc",
        search: null,
        searchBy: "title",
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