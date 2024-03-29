import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

import SubHeaderBlock from '../base/SubHeaderBlock/SubHeaderBlock.vue';
import ButtonToggle from '../base/ButtonToggle/ButtonToggle.vue';
import { ButtonToggleOption } from '../base/ButtonToggle/component';
import Pagination from '../Pagination/Pagination.vue';

@Component({ components: { ButtonToggle, SubHeaderBlock, Pagination } })
export default class SearchSummary extends Vue {
  @Prop({ default: 0 })
  totalFound!: number;

  @Prop({ default: () => [] })
  sortByOptions!: ButtonToggleOption[];

  @PropSync('sortBy', { default: '' })
  sortBySynced!: string;
}
