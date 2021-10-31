
module.exports = {
    extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:jest/recommended', 'plugin:import/errors', 'plugin:import/warnings'],
    env: {
        browser: true,
        node: true,
        'jest/globals': true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    settings: {
        react: {
            version: '17.0.0'
        }
    },
    rules: {
        'no-array-constructor': 2,
        'no-new-object': 2,
        'no-param-reassign': 0,
        indent: [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'no-underscore-dangle': 0,
        'class-methods-use-this': 0,
        'import/no-absolute-path': 0,
        'no-multiple-empty-lines': 0,
        'comma-dangle': 0,
        'no-nested-ternary': 0,
        'guard-for-in': 0,
        eqeqeq: 0,
        'global-require': 0,
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true
            }
        ],
        'vars-on-top': 2,
        'max-len': 0,
        'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
        'no-trailing-spaces': 0,
        'default-case': 0,
        'one-var': 0,
        'no-plusplus': 0,
        'no-void': 0,
        'consistent-return': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'spaced-comment': 0,
        'prefer-destructuring': 0,
        'object-curly-newline': ['error', { consistent: true }],
        camelcase: 0,
        'import/extensions': ['error', { js: 'always', mjs: 'always', json: 'always' }],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'no-else-return': ['error', { allowElseIf: true }],
        'arrow-parens': [2, 'as-needed', { 'requireForBlockBody': true }],
        'max-classes-per-file': 0
    },
    globals: {
        Promise: false
    },
    plugins: [
        'react',
        'jest'
    ]
};
