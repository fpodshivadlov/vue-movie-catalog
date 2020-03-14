import { Component, Prop, Vue } from 'vue-property-decorator';

export interface MovieItem {
  name: string;
  year: number;
  genres: string[];
  imageUrl: string;
}

@Component
export default class SearchResult extends Vue {

  @Prop({ default: () => [] })
  resultItems!: MovieItem[];

}
