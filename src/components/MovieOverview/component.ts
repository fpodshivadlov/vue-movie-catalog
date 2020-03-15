import { Component, Prop, Vue } from 'vue-property-decorator';

import { MovieItem } from "../../data/types"
import { filters } from "../../utils"

@Component({ 
  filters: { year: filters.year },
})
export default class MovieOverview extends Vue {

  @Prop()
  item!: MovieItem;

}
