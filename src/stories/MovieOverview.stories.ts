import { storiesOf } from '@storybook/vue';

import MovieOverview from '../components/MovieOverview/MovieOverview.vue';
import { MovieItem } from "../data/types";
import movies from "../data/movies";

const movieItem: MovieItem = movies[0];

storiesOf('Movie Overview', module)
  .add('default', () => ({
    components: { MovieOverview },
    data() {
      return {
        movieItem,
      };
    },
    template: `<MovieOverview 
      :item="movieItem"
    />`,
  }));
