import { Component, Prop, Vue } from 'vue-property-decorator';

import Switcher from '../common/Switcher/Switcher.vue';

@Component({ components: { Switcher }})
export default class SearchResult extends Vue {

  @Prop({ default: 0 })
  totalFound!: number;

}
