import { defineCustomElements } from '../loader';
import { fn } from '@storybook/test';


defineCustomElements();

export const parameters = {
  actions: { onClick: fn() },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
