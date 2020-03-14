import { storiesOf } from '@storybook/vue';

import Switcher from '../../components/common/Switcher/Switcher.vue';
import { SwitcherOption } from '../../components/common/Switcher/component';

const options: SwitcherOption[] = [
  {
    value: "option1",
    label: "Option 1",
  },
  {
    value: "option2",
    label: "Option 2  ",
  },
]

storiesOf('Common', module)
  .add('Switcher: default', () => ({
    components: { Switcher },
    data() {
      return {
        options: options,
      };
    },
    template: `<div>
      <Switcher 
        :options="options"
        name="radio-options"
      />
    </div>`,
  }));
