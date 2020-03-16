import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import SearchForm from '../components/SearchForm/SearchForm.vue';

storiesOf('Search Form', module)
  .add('default', () => ({
    components: { SearchForm },
    data: () => ({
      searchText: "text",
    }),
    methods: {
      searchClick: function () {
        action('search-click');
        window.alert(`search-click: ${this["searchText"]}`);
      },
    },
    template: `<SearchForm 
      :searchText="searchText"
      @update:searchText="searchText = $event"
      @search-action="searchClick"
    />`,
  }));
