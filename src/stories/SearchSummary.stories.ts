import { storiesOf } from '@storybook/vue';

import SearchSummary from '../components/SearchSummary/SearchSummary.vue';

storiesOf('Search Summary', module)
  .add('default', () => ({
    components: { SearchSummary },
    data: () => ({
      sortBy: 'date',
    }),
    template: `<SearchSummary 
      :totalFound="7"
      :sortByOptions="[
        { value: 'title', label: 'Title' },
        { value: 'date', label: 'Date' },
      ]"
      :sortBy="sortBy"
      @update:sortBy="sortBy = $event"
    />`,
  }));

storiesOf('Search Summary', module)
  .add('not found', () => ({
    components: { SearchSummary },
    data: () => ({
      sortBy: 'title',
    }),
    template: `<SearchSummary 
      :totalFound="0"
      :sortByOptions="[
        { value: 'title', label: 'Title' },
        { value: 'date', label: 'Date' },
      ]"
      :sortBy="sortBy"
      @update:sortBy="sortBy = $event"
    />`,
  }));
