import { Component } from 'vue-property-decorator';
import { Vue } from '@/utils';

import { LoadStatus } from '@/store/types';
import MovieOverview from '@/components/MovieOverview/MovieOverview.vue'
import { actions } from '@/store';

@Component({
  components: { MovieOverview },
})
export default class MoviePage extends Vue {
  LoadStatus = LoadStatus;

  get movieItem() {
    return this.$storeTyped.state.getItem.item;
  }

  get status(): LoadStatus {
    return this.$storeTyped.state.getItem.status;
  }

  created() {
    const id = this.$route.params.id;
    this.$storeTyped.dispatch(actions.getItem.getItem, id);
  }
}
