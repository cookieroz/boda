/** @type {import('eslint').Linter.Config} */
export default {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    '@remix-run/eslint-config/jest-testing-library',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node'
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        'no-unused-vars': 'off',
      },
    },
  ],
  settings: {
    jest: {
      version: 27,
    },
  },
  rules: {
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
    'no-duplicate-imports': 'error',
  },
};
