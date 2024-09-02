const { eslint } = require('@betterer/eslint');

const includePaths = './src/**/*.{ts,tsx}';
const excludePaths = new RegExp(['node_modules', 'dist', 'build'].join('|'));

module.exports = {
  'Enable eslint rules': () =>
    eslint({
      'eslint-comments/require-description': 'error',
    })
      .include(includePaths)
      .exclude(excludePaths),
};
