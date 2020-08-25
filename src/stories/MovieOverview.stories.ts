import Vue from 'vue';
import { withKnobs, select } from '@storybook/addon-knobs';

import MovieOverview from '../components/MovieOverview/MovieOverview.vue';
import { MovieItem } from '../types';
import moviesData from './data/movies';

export default {
  title: 'Movie Overview',
  decorators: [withKnobs],
};

const movieOptions = (movies: MovieItem[]) => {
  const movieValues = movies.reduce((state, value) => ({ ...state, [value.title]: value.id }), {});

  const id = select('Movie', movieValues, movies[0].id);
  return movies.find((x) => x.id === id);
};

export const customizable = () => Vue.extend({
  components: { MovieOverview },
  props: {
    movie: { default: movieOptions(moviesData) },
  },
  template: '<MovieOverview :item="movie" />',
});
