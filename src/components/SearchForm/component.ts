import { Component, Vue } from 'vue-property-decorator';

import Switcher from '../common/Switcher/Switcher.vue';

@Component({ components: { Switcher }})
export default class SearchForm extends Vue {
  form = {
    searchText: '',
  };

  onSubmit(): void {
    window.alert(this.form.searchText);
  }
}
