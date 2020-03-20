const path = require('path');

module.exports = {
  addons: [
    '@storybook/preset-typescript',
    '@storybook/preset-scss',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links/register',
  ],
};
