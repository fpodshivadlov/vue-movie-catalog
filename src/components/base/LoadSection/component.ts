import { Component, Prop, Vue } from 'vue-property-decorator';
import { LoadStatus } from '../../../types';

@Component
export default class LoadSection extends Vue {
  LoadStatus = LoadStatus;

  @Prop()
  status!: LoadStatus;

  refreshClick() {
    if (this.$router) {
      this.$router.go(0);
    }
  }
}
