module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' } },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        printWidth: 80,
        endOfLine: 'auto',
      },
    ],

    // 🔧 вот сюда нужно
    'react/react-in-jsx-scope': 'off',

    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'warn',
    'no-debugger': 'error',
  },
};
