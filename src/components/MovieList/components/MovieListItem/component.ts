import { Component, Prop, Vue } from 'vue-property-decorator';

import { MovieItem } from '../../../../types';
import { filters } from '../../../../utils';

@Component({
  filters: { year: filters.year },
})
export default class MovieListItem extends Vue {
  @Prop({ required: true })
  item!: MovieItem;
}
