import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

import Switcher from '../common/Switcher/Switcher.vue';
import { SwitcherOption } from '../common/Switcher/component';

@Component({ components: { Switcher }})
export default class SearchSummary extends Vue {

  @Prop({ default: 0 })
  totalFound!: number;

  @Prop({ default: () => [] })
  sortByOptions!: SwitcherOption[];

  @PropSync('sortBy', { default: '' })
  sortBySynced!: string;

}
