module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "no-debugger": "off",
    "no-console": 0
  }
}
