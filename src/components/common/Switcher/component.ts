import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';

export interface SwitcherOption {
  value: string;
  label: string;
}

@Component
export default class Switcher extends Vue {

  @Prop({ default: [] })
  options!: SwitcherOption[];

  @Model('change', { required: true })
  selectedValue!: string;

  @Emit('change')
  setValue(value: string) {
    return value;
  }

}
