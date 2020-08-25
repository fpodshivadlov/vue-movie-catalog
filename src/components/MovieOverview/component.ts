import { Component, Prop, Vue } from 'vue-property-decorator';

import { MovieItem } from '../../types';
import { filters } from '../../utils';

import HeaderBlock from '../base/HeaderBlock/HeaderBlock.vue';

@Component({
  components: { HeaderBlock },
  filters: { year: filters.year },
})
export default class MovieOverview extends Vue {
  @Prop({ required: true })
  item!: MovieItem;
}
