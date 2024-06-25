import React from 'react';
import { Preview } from '@storybook/react';
import { ParticleProvider } from '../src';
import './style.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => (
      <ParticleProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ParticleProvider>
    ),
  ],

  tags: ['autodocs'],
};

export default preview;
