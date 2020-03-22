import { withKnobs, select } from '@storybook/addon-knobs';

import LoadSection from '../../components/base/LoadSection/LoadSection.vue';
import { LoadStatus } from '../../types';

export default {
  title: 'Base/Load Section',
  decorators: [withKnobs],
};

export const customizable = () => ({
  components: { LoadSection },
  props: {
    status: { default: select('Loading Status', LoadStatus, LoadStatus.NotLoaded) },
  },
  template: `<LoadSection :status="status">
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
  </LoadSection>`,
});
