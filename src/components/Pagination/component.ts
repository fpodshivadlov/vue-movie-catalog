import { Component, Prop, PropSync, Vue, Watch } from 'vue-property-decorator';

import SubHeaderBlock from '../base/SubHeaderBlock/SubHeaderBlock.vue';
import PaginationButton from './components/PaginationButton.vue';

@Component({ components: { SubHeaderBlock, PaginationButton } })
export default class SearchSummary extends Vue {
  @Prop({ required: true })
  total!: number;

  @PropSync('current')
  currentSynced!: number;

  @Watch('total')
  onTotalChanged(total: number) {
    if (this.currentSynced > total) this.currentSynced = total;
  }

  getDisplayingNumbers(): number[] {
    const valuesByPriority = [this.currentSynced, 1, this.total, 2, this.total - 1, 3]
      .filter((x) => x >= 1 && x <= this.total);
    return [...new Set(valuesByPriority)]
      .slice(0, 5)
      .sort((a, b) => a - b);
  }
}
