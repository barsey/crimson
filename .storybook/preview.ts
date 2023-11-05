import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from '../src/theming/theme';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: defaultTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
  }),
];

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
//   decorators: [
//     (Story) => (
//       <ParticleProvider>
//         {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
//         <Story />
//       </ParticleProvider>
//     ),
//   ],
// };

// export default preview;
