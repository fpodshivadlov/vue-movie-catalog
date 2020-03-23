import Vue from 'vue';
import { Emit, Component } from 'vue-property-decorator';
import { BvEvent } from 'bootstrap-vue';

import { SearchBy, SortBy, SearchRequest, SortOrder } from '@/types';
import { LoadStatus, searchMoviesMapper } from '@/store';

import SubHeaderBlock from '@/components/base/SubHeaderBlock/SubHeaderBlock.vue';
import ButtonToggle from '@/components/base/ButtonToggle/ButtonToggle.vue';
import SearchForm from '@/components/SearchForm/SearchForm.vue';
import SearchSummary from '@/components/SearchSummary/SearchSummary.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import MovieList from '@/components/MovieList/MovieList.vue';
import { ButtonToggleOption } from '@/components/base/ButtonToggle/component';

const Mappers = Vue.extend({
  computed: searchMoviesMapper.mapState({
    result: (state) => state.result,
    status: (state) => state.status,
  }),
  methods: searchMoviesMapper.mapActions({
    dispatchGetItems: 'getItems',
  }),
});

const perPage = 10;

@Component({
  components: {
    SearchForm, SearchSummary, MovieList, SubHeaderBlock, ButtonToggle, Pagination,
  },
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

  currentPage = 1;

  get totalPages() {
    return this.result.total && Math.floor((this.result.total - 1) / perPage) + 1;
  }

  @Emit()
  onInputChange(event: BvEvent) {
    return event.target.value;
  }

  created() {
    this.search();
  }

  search() {
    this.currentPage = 1;
    this.searchNoResetPagination();
  }

  searchNoResetPagination() {
    const payload: SearchRequest = {
      searchText: this.searchText,
      searchBy: this.searchByValue,
      sortBy: this.sortByValue,
      sortOrder: this.getSortOrder(this.sortByValue),
      limit: perPage,
      offset: (this.currentPage - 1) * perPage,
    };

    this.dispatchGetItems(payload);
  }

  getSortOrder(sortBy: SortBy) {
    return sortBy === SortBy.Rating || sortBy === SortBy.ReleaseDate
      ? SortOrder.Desc
      : SortOrder.Asc;
  }
}
