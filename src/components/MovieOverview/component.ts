import { Component, Prop, Vue } from 'vue-property-decorator';

export interface MovieItem {
  name: string;
  year: number;
  genres: string[];
  imageUrl: string;
  rating: number;
  durationMinutes: number;
  description: string;
}

@Component
export default class MovieOverview extends Vue {

  @Prop()
  item!: MovieItem;

}
