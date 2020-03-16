import { Emit, Component } from 'vue-property-decorator'
import { BvEvent } from 'bootstrap-vue'

import { Vue } from '@/utils'
import { MoviesSearchResult, SearchBy } from '@/data/types'
import { LoadStatus } from '@/store/types'
import { actions } from '@/store'

import SearchForm from '@/components/SearchForm/SearchForm.vue'
import SearchSummary from '@/components/SearchSummary/SearchSummary.vue'
import SearchResult from '@/components/SearchResult/SearchResult.vue'
import { SwitcherOption } from '@/components/common/Switcher/component'

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

  searchByValue: SearchBy = SearchBy.Title;
  searchByOptions: SwitcherOption[] = [
    { value: SearchBy.Title, label: 'Title' },
    { value: SearchBy.Genres, label: 'Genres' },
  ];

  @Emit()
  onInputChange(event: BvEvent) {
    return event.target.value;
  }

  created() {
    this.$storeTyped.dispatch(actions.searchItems.getItems);
  }

  search() {
    this.$storeTyped.dispatch(actions.searchItems.getItems, {
      searchText: this.searchText,
      searchBy: this.searchByValue,
    });
  }

}
