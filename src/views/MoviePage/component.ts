import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

import { LoadStatus, getMovieMapper, getGenresMapper } from '@/store';

import SubHeaderBlock from '@/components/base/SubHeaderBlock/SubHeaderBlock.vue';
import MovieList from '@/components/MovieList/MovieList.vue';
import MovieOverview from '@/components/MovieOverview/MovieOverview.vue';

const Mappers = Vue.extend({
  computed: {
    ...getMovieMapper.mapState({
      movieItem: (state) => state.item,
      status: (state) => state.status
    }),
    ...getGenresMapper.mapState({
      genres: (state) => state.genres,
    }),
  },
  methods: getMovieMapper.mapActions({
    getItem: 'getItem',
  }),
});

@Component({
  components: { SubHeaderBlock, MovieList, MovieOverview },
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
