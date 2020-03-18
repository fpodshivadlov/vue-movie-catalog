import { Component } from 'vue-property-decorator'
import Vue from 'vue';

@Component({
  metaInfo: function() {
    return {
      title: this.$route.meta.title,
      titleTemplate: '%s | Movie Catalog',
    };
  },
})
export default class App extends Vue {

}
