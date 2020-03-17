import { storiesOf } from '@storybook/vue';

import HeaderBlock from '../../components/base/HeaderBlock/HeaderBlock.vue';

storiesOf('Base', module)
  .add('HeaderBlock', () => ({
    components: { HeaderBlock },
    template: `<HeaderBlock>
        <template v-slot:right-top>
          <div>Right-Top</div>
        </template>
        <div>Main content 1</div>
        <div>Main content 2</div>
        <div>Main content 3</div>
      </HeaderBlock>`,
  }));
