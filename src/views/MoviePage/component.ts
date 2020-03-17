import { Component, Watch } from 'vue-property-decorator';
import { Vue } from '@/utils';

import { LoadStatus } from '@/store/types';
import { actions } from '@/store';

import SubHeaderBlock from '@/components/base/SubHeaderBlock/SubHeaderBlock.vue';
import MovieList from '@/components/MovieList/MovieList.vue';
import MovieOverview from '@/components/MovieOverview/MovieOverview.vue';

@Component({
  components: { SubHeaderBlock, MovieList, MovieOverview },
})
export default class MoviePage extends Vue {
  LoadStatus = LoadStatus;

  get movieId() {
    return this.$route.params.id;
  }

  @Watch('movieId', { immediate: true })
  onMovieChanged(movieId: string) {
    this.$storeTyped.dispatch(actions.getItem.getItem, movieId);
  }

  get movieItem() {
    return this.$storeTyped.state.getItem.item;
  }

  get status(): LoadStatus {
    return this.$storeTyped.state.getItem.status;
  }

  get genres() {
    return this.$storeTyped.state.getGenres.items;
  }
}
