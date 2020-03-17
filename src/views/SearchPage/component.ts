import { Emit, Component } from 'vue-property-decorator'
import { BvEvent } from 'bootstrap-vue'

import { Vue } from '@/utils'
import { MoviesSearchResult, SearchBy, SortBy, SearchRequest, SortOrder } from '@/data/types'
import { LoadStatus } from '@/store/types'
import { actions } from '@/store'

import SearchForm from '@/components/SearchForm/SearchForm.vue'
import SearchSummary from '@/components/SearchSummary/SearchSummary.vue'
import MovieList from '@/components/MovieList/MovieList.vue'
import { ButtonToggleOption } from '@/components/base/ButtonToggle/component'

@Component({
  components: { SearchForm, SearchSummary, MovieList },
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
  searchByOptions: ButtonToggleOption[] = [
    { value: SearchBy.Title, label: 'Title' },
    { value: SearchBy.Genres, label: 'Genres' },
  ];

  sortByValue: SortBy = SortBy.Title;
  sortByOptions: ButtonToggleOption[] = [
    { value: SortBy.Title, label: 'Title' },
    { value: SortBy.ReleaseDate, label: 'Date' },
    { value: SortBy.Rating, label: 'Rating' },
  ];

  @Emit()
  onInputChange(event: BvEvent) {
    return event.target.value;
  }

  created() {
    this.$storeTyped.dispatch(actions.searchItems.getItems);
  }

  search() {
    const payload: SearchRequest = {
      searchText: this.searchText,
      searchBy: this.searchByValue,
      sortBy: this.sortByValue,
      sortOrder: this.getSortOrder(this.sortByValue),
    };

    this.$storeTyped.dispatch(actions.searchItems.getItems, payload);
  }

  getSortOrder(sortBy: SortBy) {
    return sortBy === SortBy.Rating || sortBy === SortBy.ReleaseDate ? SortOrder.Desc : SortOrder.Asc;
  }

}
