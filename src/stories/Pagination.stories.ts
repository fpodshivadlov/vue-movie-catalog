import { storiesOf } from '@storybook/vue';

import Pagination from '../components/Pagination/Pagination.vue';

storiesOf('Pagination', module)
  .add('1 of 1', () => ({
    components: { Pagination },
    data: () => ({ current: 1 }),
    template: `<Pagination :current.sync="current" :total="1" />`,
  }));

storiesOf('Pagination', module)
  .add('2 of 3', () => ({
    components: { Pagination },
    data: () => ({ current: 2 }),
    template: `<Pagination :current.sync="current" :total="3" />`,
  }));

storiesOf('Pagination', module)
  .add('1 of 7', () => ({
    components: { Pagination },
    data: () => ({ current: 1 }),
    template: `<Pagination :current.sync="current" :total="7" />`,
  }));

storiesOf('Pagination', module)
  .add('5 of 10', () => ({
    components: { Pagination },
    data: () => ({ current: 5 }),
    template: `<Pagination :current.sync="current" :total="10" />`,
  }));
