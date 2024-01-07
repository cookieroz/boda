const vitestFiles = ['app/**/__tests__/**/*', 'app/**/*.{spec,test}.*'];
const testFiles = ['**/tests/**', ...vitestFiles];
const appFiles = ['app/**'];

/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'prettier',
  ],
  rules: {
    'no-empty-pattern': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
      },
    ],
    'import/no-duplicates': ['warn', { 'prefer-inline': true }],
    'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
  },
  overrides: [
    {
      plugins: ['remix-react-routes'],
      files: appFiles,
      excludedFiles: testFiles,
      rules: {
        'remix-react-routes/use-link-for-routes': 'error',
        'remix-react-routes/require-valid-paths': 'error',
        'remix-react-routes/no-relative-paths': [
          'off',
          { allowLinksToSelf: true },
        ],
        'remix-react-routes/no-urls': 'error',
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: testFiles,
                message: 'Do not import test files in app files',
              },
            ],
          },
        ],
      },
    },
    {
      extends: ['@remix-run/eslint-config/jest-testing-library'],
      files: vitestFiles,
      rules: {
        'testing-library/no-await-sync-events': 'off',
        'jest-dom/prefer-in-document': 'off',
      },
      settings: {
        jest: {
          version: 28,
        },
      },
    },
  ],
};
