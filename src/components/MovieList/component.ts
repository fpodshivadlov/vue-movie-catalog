import { Component, Prop, Vue } from 'vue-property-decorator';
import { RawLocation } from 'vue-router';

import { MovieItem } from "../../types"
import { filters } from "../../utils"

@Component({ 
  filters: { year: filters.year },
})
export default class MovieList extends Vue {

  @Prop({ default: () => [] })
  items!: MovieItem[];

  @Prop({ default: () => () => '', required: true })
  getLocation!: (id: string) => RawLocation;
  
}
