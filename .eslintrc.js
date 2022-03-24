module.exports = {
  'parser': '@babel/eslint-parser',
  'extends': ['eslint:recommended', 'prettier'],
  'env': {
    'browser': true,
    'node': true,
    'es2021': true,
  },
  'parserOptions': {
    'ecmaVersion': 2021,
    'sourceType': 'module',
    'ecmaFeatures': { 'jsx': true },
  },
  'rules': {}
}