import { storiesOf } from '@storybook/vue';

import SearchSummary from '../components/SearchSummary/SearchSummary.vue';

export default {
  title: 'Search Summary',
};

export const haveResults = () => ({
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
    :sortBy.sync="sortBy"
  />`,
});

export const noResults = () => ({
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
    :sortBy.sync="sortBy"
  />`,
});
