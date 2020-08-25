import { Component, Prop, Vue } from 'vue-property-decorator';

import { MovieItem } from '../../types';

import MovieListItem from './components/MovieListItem/MovieListItem.vue';

@Component({
  components: { MovieListItem },
})
export default class MovieList extends Vue {
  @Prop({ default: () => [] })
  items!: MovieItem[];
}
