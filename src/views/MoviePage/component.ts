import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

import { LoadStatus } from '@/types';
import { getMovieMapper, getGenresMapper } from '@/store';

import SubHeaderBlock from '@/components/base/SubHeaderBlock/SubHeaderBlock.vue';
import LoadSection from '@/components/base/LoadSection/LoadSection.vue';
import MovieList from '@/components/MovieList/MovieList.vue';
import MovieOverview from '@/components/MovieOverview/MovieOverview.vue';

const Mappers = Vue.extend({
  computed: {
    ...getMovieMapper.mapState({
      movieItem: (state) => state.item,
      movieItemStatus: (state) => state.status,
    }),
    ...getGenresMapper.mapState({
      genres: (state) => state.genres,
      genresStatus: (state) => state.status,
    }),
  },
  methods: getMovieMapper.mapActions({
    getItem: 'getItem',
  }),
});

@Component<MoviePage>({
  components: {
    SubHeaderBlock, MovieList, MovieOverview, LoadSection,
  },
  metaInfo() {
    return { title: this.movieItem?.title };
  },
})
export default class MoviePage extends Mappers {
  LoadStatus = LoadStatus;

  get movieId() {
    return this.$route.params.id;
  }

  @Watch('movieId', { immediate: true })
  onMovieChanged(movieId: string) {
    this.getItem(movieId);
  }
}
