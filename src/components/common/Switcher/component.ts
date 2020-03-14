import { Component, Prop, Vue } from 'vue-property-decorator';

export interface SwitcherOption {
  value: string;
  label: string;
}

@Component
export default class Switcher extends Vue {

  @Prop({ default: [] })
  options!: SwitcherOption[];

}
