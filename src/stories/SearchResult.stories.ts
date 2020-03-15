import { storiesOf } from '@storybook/vue';

import SearchResult from '../components/SearchResult/SearchResult.vue';
import { MovieItem } from "../data/types";
import movies from "../data/movies";

const movieItems: MovieItem[] = movies.slice(0, 3);

storiesOf('Search Result', module)
  .add('default', () => ({
    components: { SearchResult },
    data() {
      return {
        movieItems,
      };
    },
    template: `<SearchResult 
      :resultItems="movieItems"
    />`,
  }));

storiesOf('Search Result', module)
  .add('not found', () => ({
    components: { SearchResult },
    template: `<SearchResult 
      :resultItems="[]"
    />`,
  }));
