import { action } from '@storybook/addon-actions';

import SearchForm from '../components/SearchForm/SearchForm.vue';

export default {
  title: 'Search Form',
};

export const simple = () => ({
  components: { SearchForm },
  data: () => ({
    searchText: 'text',
    searchBy: 'title',
    searchAction: action('search-click'),
  }),
  template: `<SearchForm
    :searchText.sync="searchText"
    @search-action="searchAction"
    :searchByOptions="[
      { value: 'title', label: 'Title' },
      { value: 'genres', label: 'Genres' },
    ]"
    :searchBy.sync="searchBy"
  />`,
});
