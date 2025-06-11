// .eslintrc.js
module.exports = {
    extends: 'next/core-web-vitals',
    rules: {
      // allow unescaped apostrophes/quotes in JSX
      'react/no-unescaped-entities': 'off',
      // allow explicit anys (for the VantaNet state)
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }
  