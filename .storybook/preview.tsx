import React from 'react';
import { Preview } from '@storybook/react';
import ParticleProvider from '../src/core/ParticleProvider';
import './style.css';

// export const decorators = [
//   withThemeFromJSXProvider({
//     themes: {
//       light: defaultTheme,
//     },
//     defaultTheme: 'light',
//     Provider: ThemeProvider,
//   }),
// ];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
};

export default preview;
