import { storiesOf } from '@storybook/vue';

import SearchSummary from '../components/SearchSummary/SearchSummary.vue';

storiesOf('Search Summary', module)
  .add('default', () => ({
    components: { SearchSummary },
    template: `<SearchSummary 
      :totalFound="7"
    />`,
  }));

storiesOf('Search Summary', module)
  .add('not found', () => ({
    components: { SearchSummary },
    template: `<SearchSummary 
      :totalFound="0"
    />`,
  }));
