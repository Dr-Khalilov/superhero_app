module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: '2022',
        sourceType: 'script',
    },
    env: {
        es6: true,
        node: true,
        commonjs: true,
        jest: true,
    },
    plugins: ['eslint-plugin-prettier'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'no-void': ['error', { allowAsStatement: true }],
    },
};
