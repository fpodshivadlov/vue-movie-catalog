import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import SubHeaderBlock from '../../components/base/SubHeaderBlock/SubHeaderBlock.vue';

export default {
  title: 'Base/Sub Header Block',
  decorators: [ withKnobs ],
};

export const customizable = () => ({
  components: { SubHeaderBlock },
  props: {
    showMain: { default: boolean('Show Main', true) },
    showRight: { default: boolean('Show Right', true) },
    mainText: { default: text('Main Text', 'ItemFound placeholder') },
    rightText: { default: text('Right Text', 'ButtonToggle placeholder') },
  },
  template: `<SubHeaderBlock>
    <div v-if="showMain">{{ mainText }}</div>
    <template #right v-if="showRight">
      <div>{{ rightText }}</div>
    </template>
  </SubHeaderBlock>`,
});

