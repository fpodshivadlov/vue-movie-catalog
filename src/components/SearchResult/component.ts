import { Component, Prop, Vue } from 'vue-property-decorator';

import Switcher from '../common/Switcher/Switcher.vue';

export interface MovieItem {
  name: string;
  year: number;
  genres: string[];
  imageUrl: string;
}

@Component({ components: { Switcher }})
export default class SearchResult extends Vue {

  @Prop({ default: () => [] })
  resultItems!: MovieItem[];

}
