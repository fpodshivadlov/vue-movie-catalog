import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import SearchForm from '../components/SearchForm/SearchForm.vue';

storiesOf('Search Form', module)
  .add('default', () => ({
    components: { SearchForm },
    data: () => ({
      searchText: "text",
      searchBy: "title",
      searchAction: action('search-click'),
    }),
    template: `<SearchForm 
      :searchText="searchText"
      @update:searchText="searchText = $event"
      @search-action="searchAction"
      :searchByOptions="[
        { value: 'title', label: 'Title' },
        { value: 'genres', label: 'Genres' },
      ]"
      :searchBy="searchBy"
      @update:searchBy="searchBy = $event"
    />`,
  }));
