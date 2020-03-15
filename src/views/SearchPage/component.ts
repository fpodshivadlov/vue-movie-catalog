import { Component } from 'vue-property-decorator'
import { Vue } from '@/utils'

import SearchForm from '@/components/SearchForm/SearchForm.vue'
import SearchSummary from '@/components/SearchSummary/SearchSummary.vue'
import SearchResult from '@/components/SearchResult/SearchResult.vue'
import { MovieItem } from '@/data/types'

@Component({
  components: { SearchForm, SearchSummary, SearchResult },
})
export default class SearchPage extends Vue {
  get movies(): MovieItem[] {
    return this.$storeTyped.state.items;
  }
}
