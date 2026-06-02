// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist', 'coverage', 'storybook-static', 'node_modules'],
  },
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/prop-types': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-target-blank': 'warn',
      'react/self-closing-comp': 'warn',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      eqeqeq: 'error',
      'prettier/prettier': 'warn',
    },
  },
  configPrettier,
  ...storybook.configs['flat/recommended'],
];
