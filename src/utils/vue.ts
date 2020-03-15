import { Vue as BaseVue } from 'vue-property-decorator';
import { Store } from 'vuex';

import { RootState } from '@/store/types';

export class Vue extends BaseVue {
  get $storeTyped(): Store<RootState> {
    return this.$store as Store<RootState>;
  }
}
