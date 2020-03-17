import { storiesOf } from '@storybook/vue';

import ButtonToggle from '../../components/base/ButtonToggle/ButtonToggle.vue';
import { ButtonToggleOption } from '../../components/base/ButtonToggle/component';

const options: ButtonToggleOption[] = [
  {
    value: "option1",
    label: "Option 1",
  },
  {
    value: "option2",
    label: "Option 2",
  },
]

storiesOf('Base', module)
  .add('ButtonToggle', () => ({
    components: { ButtonToggle },
    data() {
      return {
        options: options,
        selectedOption: options[0].value,
      };
    },
    template: `<div>
      <ButtonToggle
        label="Select options:"
        :options="options"
        v-model="selectedOption"
      />
    </div>`,
  }));
