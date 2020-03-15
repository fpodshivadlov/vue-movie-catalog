import { Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { Vue } from '@/utils'

import SearchForm from '@/components/SearchForm/SearchForm.vue'
import SearchSummary from '@/components/SearchSummary/SearchSummary.vue'
import SearchResult from '@/components/SearchResult/SearchResult.vue'
import { MoviesSearchResult } from '@/data/types'
import { actions } from '@/store/types'

@Component({
  components: { SearchForm, SearchSummary, SearchResult },
})
export default class SearchPage extends Vue {
  get result(): MoviesSearchResult {
    return this.$storeTyped.state.searchItems.result;
  }

  created() {
    this.$storeTyped.dispatch(actions.searchItems.getItems);
  }
}
