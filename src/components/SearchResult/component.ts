import { Component, Prop, Vue } from 'vue-property-decorator';

import { MovieItem } from "../../data/types"
import { filters } from "../../utils"

@Component({ 
  filters: { year: filters.year },
})
export default class SearchResult extends Vue {

  @Prop({ default: () => [] })
  resultItems!: MovieItem[];

}
