import Vue from 'vue';
import { withKnobs, number } from '@storybook/addon-knobs';

import MovieList from '../components/MovieList/MovieList.vue';

import { MovieItem } from '../types';
import movies from './data/movies';

export default {
  title: 'Movie List',
  decorators: [ withKnobs ],
};

const movieNumberOptions = (movies: MovieItem[]) => {
  const items = number('Movie items', 3, { range: true, min: 0, max: 9 });
  return movies.slice(0, items);
}

export const customizable = () => Vue.extend({
  components: { MovieList },
  props: {
    movieItems: { default: movieNumberOptions(movies) },
  },
  template: `<MovieList :items="movieItems" />`,
});

export const notFound = () => ({
  components: { MovieList },
  template: `<MovieList :items="[]" />`,
});
