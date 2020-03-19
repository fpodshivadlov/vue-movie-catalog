import { storiesOf } from '@storybook/vue';

import MovieList from '../components/MovieList/MovieList.vue';
import { MovieItem } from '../types';
import movies from './data/movies';

const movieItems: MovieItem[] = movies.slice(0, 3);

storiesOf('Movie List', module)
  .add('default', () => ({
    components: { MovieList },
    data() {
      return {
        movieItems,
      };
    },
    template: `<MovieList 
      :items="movieItems"
    />`,
  }));

storiesOf('Movie List', module)
  .add('not found', () => ({
    components: { MovieList },
    template: `<MovieList 
      :items="[]"
    />`,
  }));
