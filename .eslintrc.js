module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'error',
    'no-param-reassign': 'error',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'prefer-const': 'error',
    'no-unused-expressions': 'off',
    'eqeqeq': ['error', 'smart'],
    'react-native/no-inline-styles': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: false,
        fixToUnknown: true,
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
