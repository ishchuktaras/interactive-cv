module.exports = {
  extends: [
    'next/core-web-vitals',
    'prettier'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
  }
}