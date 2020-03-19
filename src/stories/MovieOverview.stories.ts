import { storiesOf } from '@storybook/vue';

import MovieOverview from '../components/MovieOverview/MovieOverview.vue';
import { MovieItem } from '../types';
import movies from './data/movies';

const movieItem: MovieItem = movies[0];

storiesOf('Movie Overview', module)
  .add('default', () => ({
    components: { MovieOverview },
    data: () => ({
      movieItem,
    }),
    template: `<MovieOverview
      :item="movieItem"
    />`,
  }));
