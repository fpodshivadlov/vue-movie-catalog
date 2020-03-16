import { Emit, Component } from 'vue-property-decorator'
import { BvEvent } from 'bootstrap-vue'
import { Vue } from '@/utils'

import SearchForm from '@/components/SearchForm/SearchForm.vue'
import SearchSummary from '@/components/SearchSummary/SearchSummary.vue'
import SearchResult from '@/components/SearchResult/SearchResult.vue'
import { MoviesSearchResult } from '@/data/types'
import { LoadStatus } from '@/store/types'
import { actions } from '@/store'

@Component({
  components: { SearchForm, SearchSummary, SearchResult },
})
export default class SearchPage extends Vue {
  LoadStatus = LoadStatus;

  get result(): MoviesSearchResult {
    return this.$storeTyped.state.searchItems.result;
  }

  get status(): LoadStatus {
    return this.$storeTyped.state.searchItems.status;
  }

  searchText = '';

  @Emit()
  onInputChange(event: BvEvent) {
    return event.target.value;
  }

  search() {
    this.$storeTyped.dispatch(actions.searchItems.getItems, {
      searchText: this.searchText,
    });
  }

  created() {
    this.$storeTyped.dispatch(actions.searchItems.getItems);
  }
}
