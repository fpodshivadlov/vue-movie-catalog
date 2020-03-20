import Vue from 'vue';
import { withKnobs, number } from '@storybook/addon-knobs';

import Pagination from '../components/Pagination/Pagination.vue';

export default {
  title: 'Pagination',
  decorators: [withKnobs],
};

export const customizable = () => Vue.extend({
  components: { Pagination },
  props: {
    total: { default: number('Total pages', 5) },
  },
  data: () => ({ current: 1 }),
  template: '<Pagination :current.sync="current" :total="total" />',
});

export const firstOfOne = () => ({
  components: { Pagination },
  data: () => ({ current: 1 }),
  template: '<Pagination :current.sync="current" :total="1" />',
});

export const secondOfThree = () => ({
  components: { Pagination },
  data: () => ({ current: 2 }),
  template: '<Pagination :current.sync="current" :total="3" />',
});

export const lastOfTen = () => ({
  components: { Pagination },
  data: () => ({ current: 10 }),
  template: '<Pagination :current.sync="current" :total="10" />',
});
