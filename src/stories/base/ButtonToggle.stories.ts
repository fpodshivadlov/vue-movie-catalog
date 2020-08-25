import { withKnobs, number, text } from '@storybook/addon-knobs';

import ButtonToggle from '../../components/base/ButtonToggle/ButtonToggle.vue';
import { ButtonToggleOption } from '../../components/base/ButtonToggle/component';

export default {
  title: 'Base/Button Toggle',
  decorators: [withKnobs],
};

const getOptions = (): ButtonToggleOption[] => {
  const items = number('Options Items', 2, { range: true, min: 0, max: 6 });
  const title = text('Options Title', 'Option');

  return [...Array(items).keys()].map((i) => ({ value: `option${i + 1}`, label: `${title} ${i + 1}` }));
};

export const customizable = () => ({
  components: { ButtonToggle },
  props: {
    label: { default: text('Label', 'Select options:') },
    options: { default: getOptions() },
  },
  data: () => ({
    selectedOption: 'option1',
  }),
  template: `<div>
    <ButtonToggle
      :label="label"
      :options="options"
      v-model="selectedOption"
    />
  </div>`,
});
