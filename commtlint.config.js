module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'scope-enum': [2, 'always', ['fix', 'add', 'update', 'remove', 'refactor']]
  }
}
