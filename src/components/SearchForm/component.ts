import { Component, Emit, Prop, PropSync, Vue } from 'vue-property-decorator';
import { BvEvent } from 'bootstrap-vue';

import Switcher from '../common/Switcher/Switcher.vue';
import { SwitcherOption } from '../common/Switcher/component';

@Component({ components: { Switcher }})
export default class SearchForm extends Vue {
  @PropSync('searchText', { default: '' })
  searchTextSynced!: string;

  @Prop({ default: () => [] })
  searchByOptions!: SwitcherOption[];

  @PropSync('searchBy', { default: '' })
  searchBySynced!: string;

  @Emit()
  searchAction(event: BvEvent) {
    // wrapper emit
  }

  inputKeydown(event: BvEvent) {
    if (event.which === 13) {
      this.searchAction(event);
    }
  }
}
