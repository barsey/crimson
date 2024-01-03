const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:vitest/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'vitest', 'prettier'],
  rules: {
    'react/no-unknown-property': [ERROR, { ignore: ['css'] }],
    'react/display-name': OFF,
    'react/prop-types': OFF,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      // Alow overrides for storybook components.
      files: ['src/**/*.stories.{js,jsx,ts,tsx}'],
      rules: {
        'no-unused-vars': OFF,
        '@typescript-eslint/no-unused-vars': [
          WARNING,
          { varsIgnorePattern: 'React' },
        ],
      },
    },
  ],
};
