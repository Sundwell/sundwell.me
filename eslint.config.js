import antfu from '@antfu/eslint-config'

export default antfu({
  lessOpinionated: true,
  formatters: true,
  vue: {
    overrides: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/component-name-in-template-casing': 'off',
    },
  },
  rules: {
    'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
})
