module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  },
  ignoreFiles: [
    '.vscode/**',
    'dist/**',
    'node_modules/**'
  ]
}
