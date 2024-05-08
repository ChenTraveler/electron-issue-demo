require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@electron-toolkit',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json',
    'prettier'
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/comment-directive': 'off',
    'no-console': 0,
    'no-use-before-define': 'off',
    'no-unused-vars': [
      'warn',
      {
        // 允许声明未使用变量
        vars: 'local',
        // 参数不检查
        args: 'none'
      }
    ],
    'vue/no-unused-vars': 'warn',
    'no-prototype-builtins': 'off',
    'no-irregular-whitespace': 'off',
    'space-before-function-paren': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-setup-props-destructure': 'off',
    'vue/script-setup-uses-vars': 'off',
    'arrow-parens': 0,
    'eol-last': 0,
    'linebreak-style': [0, 'error', 'windows'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  }
}
