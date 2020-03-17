import { Component, Emit, Prop, PropSync, Vue } from 'vue-property-decorator';
import { BvEvent } from 'bootstrap-vue';

import HeaderBlock from '../base/HeaderBlock/HeaderBlock.vue';
import ButtonToggle from '../base/ButtonToggle/ButtonToggle.vue';
import { ButtonToggleOption } from '../base/ButtonToggle/component';

@Component({ components: { ButtonToggle, HeaderBlock }})
export default class SearchForm extends Vue {
  @PropSync('searchText', { default: '' })
  searchTextSynced!: string;

  @Prop({ default: () => [] })
  searchByOptions!: ButtonToggleOption[];

  @PropSync('searchBy', { default: '' })
  searchBySynced!: string;

  @Emit()
  searchAction() {
    // wrapper emit
  }

  inputKeydown(event: BvEvent) {
    if (event.which === 13) {
      this.searchAction();
    }
  }
}
