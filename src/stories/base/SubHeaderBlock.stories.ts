import { storiesOf } from '@storybook/vue';

import SubHeaderBlock from '../../components/base/SubHeaderBlock/SubHeaderBlock.vue';

storiesOf('Base', module)
  .add('SubHeaderBlock: left content', () => ({
    components: { SubHeaderBlock },
    template: `<SubHeaderBlock>
      <div>7 movie(s) found</div>
      <template v-slot:right>
        <div>ButtonToggle placeholder</div>
      </template>
    </SubHeaderBlock>`,
  }));

storiesOf('Base', module)
  .add('SubHeaderBlock: no left content', () => ({
    components: { SubHeaderBlock },
    template: `<SubHeaderBlock>
      <template v-slot:right>
        <div>ButtonToggle placeholder</div>
      </template>
    </SubHeaderBlock>`,
  }));
