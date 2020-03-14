import { storiesOf } from '@storybook/vue';

import SearchForm from '../components/SearchForm/SearchForm.vue';

storiesOf('Search Form', module)
  .add('default', () => ({
    components: { SearchForm },
    template: `<SearchForm />`,
  }));
