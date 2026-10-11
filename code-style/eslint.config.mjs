import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

const MAX_POSITIONAL_PARAMETERS = 2;
const CODE_FILES = ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'];
const TS_FILES = ['**/*.{ts,tsx,mts,cts}'];
const JSX_FILES = ['**/*.{jsx,tsx}'];
const alphabetical = { order: 'asc', type: 'alphabetical' };

export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/coverage/**', '**/.next/**'],
  },
  {
    files: CODE_FILES,
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: { ecmaFeatures: { jsx: true } },
      sourceType: 'module',
    },
    plugins: { perfectionist },
    rules: {
      ...js.configs.recommended.rules,
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],
      'max-params': ['error', MAX_POSITIONAL_PARAMETERS],
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-magic-numbers': ['warn', { ignore: [0, 1], ignoreArrayIndexes: true }],
      'no-nested-ternary': 'error',
      // Среда проекта назначает globals отдельно; базовый комплект её не выбирает.
      'no-undef': 'off',
      'no-unused-vars': ['error', { args: 'after-used', vars: 'all' }],
      'no-useless-catch': 'error',
      'no-var': 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          ...alphabetical,
          groups: [],
          newlinesBetween: 'ignore',
          sortSideEffects: false,
        },
      ],
      'perfectionist/sort-named-exports': ['error', alphabetical],
      'perfectionist/sort-named-imports': ['error', { ...alphabetical, groups: [] }],
      // Перестановка значений и default expressions может изменить выполнение.
      'perfectionist/sort-objects': ['warn', alphabetical],
      'prefer-const': ['error', { destructuring: 'all' }],
    },
  },
  {
    files: TS_FILES,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    plugins: { '@typescript-eslint': tseslint.plugin },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: false }],
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used', vars: 'all' }],
      '@typescript-eslint/only-throw-error': 'error',
      'no-unused-vars': 'off',
      'perfectionist/sort-interfaces': [
        'error',
        { ...alphabetical, groups: ['required-member', 'optional-member'] },
      ],
      'perfectionist/sort-object-types': [
        'error',
        { ...alphabetical, groups: ['required-member', 'optional-member'] },
      ],
    },
  },
  {
    files: JSX_FILES,
    plugins: { 'jsx-a11y': jsxA11y, react, 'react-hooks': reactHooks },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      'perfectionist/sort-jsx-props': ['error', alphabetical],
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react/button-has-type': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/no-multi-comp': ['error', { ignoreStateless: false }],
      'react/self-closing-comp': 'error',
    },
    settings: { react: { version: 'detect' } },
  },
];
