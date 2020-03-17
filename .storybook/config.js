import { configure } from '@storybook/vue';

import '../src/plugins/bootstrapVue';

const req = require.context('../src', true, /.stories.ts$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
