import Vue from 'vue'
import { Emit, Component } from 'vue-property-decorator'
import { BvEvent } from 'bootstrap-vue'

import { SearchBy, SortBy, SearchRequest, SortOrder } from '@/data/types'
import { LoadStatus, searchMoviesMapper } from '@/store'

import SubHeaderBlock from '@/components/base/SubHeaderBlock/SubHeaderBlock.vue'
import ButtonToggle from '@/components/base/ButtonToggle/ButtonToggle.vue'
import SearchForm from '@/components/SearchForm/SearchForm.vue'
import SearchSummary from '@/components/SearchSummary/SearchSummary.vue'
import MovieList from '@/components/MovieList/MovieList.vue'
import { ButtonToggleOption } from '@/components/base/ButtonToggle/component'

const Mappers = Vue.extend({
  computed: searchMoviesMapper.mapState({
    result: (state) => state.result,
    status: (state) => state.status,
  }),
  methods: searchMoviesMapper.mapActions({
    dispatchGetItems: 'getItems',
  }),
});

@Component({
  components: { SearchForm, SearchSummary, MovieList, SubHeaderBlock, ButtonToggle },
})
export default class SearchPage extends Mappers {
  LoadStatus = LoadStatus;

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
    this.dispatchGetItems();
  }

  search() {
    const payload: SearchRequest = {
      searchText: this.searchText,
      searchBy: this.searchByValue,
      sortBy: this.sortByValue,
      sortOrder: this.getSortOrder(this.sortByValue),
    };

    this.dispatchGetItems(payload);
  }

  getSortOrder(sortBy: SortBy) {
    return sortBy === SortBy.Rating || sortBy === SortBy.ReleaseDate ? SortOrder.Desc : SortOrder.Asc;
  }

}
