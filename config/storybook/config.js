import { configure } from '@storybook/vue';

import '../../src/plugins/bootstrapVue';

const req = require.context('../../src', true, /.stories.ts$/);

configure(req, module);
