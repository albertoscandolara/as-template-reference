// eslint.config.js
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import js from '@eslint/js';
import eslintPluginRegExp from 'eslint-plugin-regexp';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginSecurity from 'eslint-plugin-security';
import path from 'path';

export default [
  // ----------------------------------------------------
  // Ignore build artifacts
  // ----------------------------------------------------
  {
    ignores: ['dist', 'node_modules', 'docs/**', 'vite.config.ts', 'vitepress.config.ts'],
  },

  // ----------------------------------------------------
  // Base JavaScript recommended rules
  // ----------------------------------------------------
  js.configs.recommended,

  // ----------------------------------------------------
  // Disable formatting rules incompatible with Prettier
  // ----------------------------------------------------
  prettier,

  // ----------------------------------------------------
  // TypeScript recommended rules
  // ----------------------------------------------------
  ...tseslint.configs.recommended,

  // ----------------------------------------------------
  // TypeScript strict & stylistic
  // ----------------------------------------------------
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  // ----------------------------------------------------
  // Project-level rules
  // ----------------------------------------------------
  {
    files: ['**/*.ts'],

    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: path.resolve(),
      },
    },

    plugins: {
      prettier: prettierPlugin,
      import: eslintPluginImportX,
      regexp: eslintPluginRegExp,
      security: eslintPluginSecurity,
    },

    rules: {
      // ----------------------------------------------
      // PRETTIER
      // ----------------------------------------------
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],

      // ----------------------------------------------
      // TYPESCRIPT RULES — MAX STRICTNESS
      // ----------------------------------------------
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowNumber: false,
          allowString: false,
          allowNullableObject: false,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false,
        },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',

      // ----------------------------------------------
      // IMPORT RULES — ULTRA STRICT
      // ----------------------------------------------
      'import/no-unresolved': 'error',
      'import/no-absolute-path': 'error',
      'import/no-useless-path-segments': 'error',
      'import/no-cycle': 'error',
      'import/no-self-import': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],

      // Ban deep relative imports ../../../../
      'import/no-relative-parent-imports': 'error',

      // ----------------------------------------------
      // REGEXP RULES
      // ----------------------------------------------
      'regexp/no-dupe-disjunctions': 'error',
      'regexp/no-empty-capturing-group': 'error',
      'regexp/no-empty-character-class': 'error',
      'regexp/no-legacy-features': 'error',
      'regexp/no-trivially-nested-quantifier': 'error',
      'regexp/no-useless-lazy': 'error',

      // ----------------------------------------------
      // SECURITY RULES
      // ----------------------------------------------
      'security/detect-object-injection': 'error',
      'security/detect-non-literal-fs-filename': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-child-process': 'error',

      // ----------------------------------------------
      // GENERAL JS RULES
      // ----------------------------------------------
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-return-await': 'error',

      // Specific rules
      curly: ['error', 'all'],
    },
  },
];
