module.exports = {
  extends: 'airbnb-base',
  rules: {
    'comma-dangle': 'off',
    'no-use-before-define': ['error', { functions: false }],
    camelcase: 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-console': 'off',
    'arrow-parens': ['error', 'as-needed'],
  },
};
