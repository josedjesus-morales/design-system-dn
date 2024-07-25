// import { addons } from '@storybook/addons';
import { addons } from 'storybook/internal/manager-api';
import { themes } from '@storybook/theming';

// Check more theming options and advanced startegies at:
// https://storybook.js.org/docs/react/configure/theming

addons.setConfig({
  theme: themes.dark,
});
