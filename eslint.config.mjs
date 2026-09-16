import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const localRulesPlugin = {
  rules: {
    'require-use-client-in-styles': {
      meta: {
        type: 'problem',
        docs: {
          description: "Require 'use client' at the top of .styles. files.",
        },
        fixable: 'code',
        schema: [],
        messages: {
          missingUseClient: "Styles files must start with 'use client';.",
        },
      },
      create(context) {
        return {
          Program(node) {
            const firstStatement = node.body[0];

            if (firstStatement?.directive === 'use client') {
              return;
            }

            context.report({
              node,
              loc: { line: 1, column: 0 },
              messageId: 'missingUseClient',
              fix(fixer) {
                return fixer.insertTextBeforeRange([0, 0], "'use client';\n\n");
              },
            });
          },
        };
      },
    },
  },
};

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  prettierConfig,
  {
    ignores: ['src/**/VirtualizedChat/*'],
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/preserve-manual-memoization': 'off',
      'react/jsx-key': 'error',
      'react/destructuring-assignment': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'no-mixed-spaces-and-tabs': 'error',
      'no-console': 'warn',
      'no-alert': 'error',
      'no-multi-spaces': 'error',
      semi: 'error',
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
        },
      ],
      'max-len': [
        'error',
        {
          code: 120,
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
        },
      ],
      'import/no-extraneous-dependencies': 'off',
      'comma-dangle': [
        'error',
        {
          arrays: 'only-multiline',
          objects: 'only-multiline',
          imports: 'only-multiline',
          exports: 'only-multiline',
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            '@/shared/*/*/*',
            '@/entities/*/*',
            '@/features/*/*',
            '@/widgets/*/*',
            '@/pages/*/*',
            '@/processes/*/*',
            '@/app/*/*',
            '!@/entities/**/*api',
          ],
        },
      ],
    },
  },
  {
    files: ['src/**/env.ts'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  {
    files: ['**/*.styles.{js,jsx,ts,tsx}'],
    plugins: {
      local: localRulesPlugin,
    },
    rules: {
      'local/require-use-client-in-styles': 'error',
    },
  },
  {
    files: ['src/**/*.slice.ts'],
    rules: {
      'no-param-reassign': 'off',
    },
  },
  {
    files: ['src/shared/assets/**/*'],
    rules: {
      'max-len': 'off',
    },
  },
  {
    files: ['src/**/*.test.*'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
];

export default eslintConfig;
