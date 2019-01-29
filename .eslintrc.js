module.exports = {
  extends: 'airbnb-base',
  globals: {
    test: true,
    expect: true,
  },
  rules: {
    'comma-dangle': 'off',
    'no-use-before-define': ['error', { functions: false }],
    camelcase: 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-console': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-mixed-operators': 'off',
    'object-curly-newline': 'off',
  },
};
