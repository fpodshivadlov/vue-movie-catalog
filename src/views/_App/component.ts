import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  metaInfo() {
    return {
      title: this.$route.meta.title,
      titleTemplate: '%s | Movie Catalog',
    };
  },
})
export default class App extends Vue {

}
