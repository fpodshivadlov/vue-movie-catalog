import { storiesOf } from '@storybook/vue';

import SearchResult from '../components/SearchResult/SearchResult.vue';
import { MovieItem } from '../components/SearchResult/component';

const movieItems: MovieItem[] = [
  {
    name: "Four rooms",
    year: 1995,
    genres: [ "Comedy" ],
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNDc3Y2YwMjUtYzlkMi00MTljLTg1ZGMtYzUwODljZTI1OTZjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
  {
    name: "Dogma",
    year: 1999,
    genres: [ "Adventure", "Comedy", "Drama" ],
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYzAyOWUyZjQtNDBiMy00ZDExLTgwNmMtZDdmY2ViNzkyN2Y0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
  {
    name: "Jay and Silent Bob Strike Back",
    year: 2001,
    genres: [ "Comedy" ],
    imageUrl: "https://m.media-amazon.com/images/M/MV5BY2EyYWEwZmQtZWU0Yy00M2Y3LThiZTktOTQxZDUxY2ZjOTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
];

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
