module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'always'],
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
