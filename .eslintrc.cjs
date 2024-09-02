module.exports = {
  root: true,
  extends: [
    'plugin:eslint-comments/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'eslint-comments/disable-enable-pair': 'off',
    'eslint-comments/no-duplicate-disable': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'eslint-comments/require-description': 'off',
  },
};
