import type { StorybookConfig } from '@storybook/html-webpack5';
 
const config: StorybookConfig = {
  framework: '@storybook/html-webpack5',
  stories: ['../src/**/**.mdx', '../src/**/**.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-viewport', 
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    '@storybook/addon-links'
  ],
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {},
    },
  },
};
 
export default config;