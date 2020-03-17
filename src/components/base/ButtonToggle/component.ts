import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';

export interface ButtonToggleOption {
  value: string;
  label: string;
}

@Component
export default class ButtonToggle extends Vue {

  @Prop({ default: () => [] })
  options!: ButtonToggleOption[];

  @Model('change', { required: true })
  selectedValue!: string;

  @Emit('change')
  setValue(value: string) {
    return value;
  }

}
