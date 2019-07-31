module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    "plugin:vue/recommended",
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    "no-console": "warn"
  }
}
