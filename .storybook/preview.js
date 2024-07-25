import { defineCustomElements } from '../loader';
import { fn } from '@storybook/test';


defineCustomElements();

export const parameters = {
  //TODO: click function
  actions: { onClick: fn() },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
