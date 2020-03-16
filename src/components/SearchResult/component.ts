import { Component, Prop, Vue } from 'vue-property-decorator';
import { RawLocation } from 'vue-router';

import { MovieItem } from "../../data/types"
import { filters } from "../../utils"

@Component({ 
  filters: { year: filters.year },
})
export default class SearchResult extends Vue {

  @Prop({ default: () => [] })
  resultItems!: MovieItem[];

  @Prop({ default: () => () => '', required: true })
  getLocation!: (id: string) => RawLocation;
  
}
