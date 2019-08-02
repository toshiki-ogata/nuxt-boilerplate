module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: { "legacyDecorators": true }
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
    'prettier',
    '@typescript-eslint'
  ],
  rules: {
    "no-console": "warn",
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
