import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

import ButtonToggle from '../base/ButtonToggle/ButtonToggle.vue';
import { ButtonToggleOption } from '../base/ButtonToggle/component';

@Component({ components: { ButtonToggle }})
export default class SearchSummary extends Vue {

  @Prop({ default: 0 })
  totalFound!: number;

  @Prop({ default: () => [] })
  sortByOptions!: ButtonToggleOption[];

  @PropSync('sortBy', { default: '' })
  sortBySynced!: string;

}
