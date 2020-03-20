import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import HeaderBlock from '../../components/base/HeaderBlock/HeaderBlock.vue';

export default {
  title: 'Base/Header Block',
  decorators: [ withKnobs ],
};

export const customizable = () => ({
  components: { HeaderBlock },
  props: {
    mainLines: { default: number('Lines', 3, { range: true, min: 0, max: 20 }) },
    showRightTop: { default: boolean('Show Right-Top', true) },
  },
  template: `<HeaderBlock>
    <template v-slot:right-top>
      <div v-if="showRightTop">Right-Top</div>
    </template>
    <div v-for="index in mainLines" :key="index">Main content {{ index }}</div>
  </HeaderBlock>`,
});
