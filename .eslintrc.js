module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier',
    'simple-import-sort',
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  rules: {
    'no-unused-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      { enableDangerousAutofixThisMayCauseInfiniteLoops: true },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'simple-import-sort/sort': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
