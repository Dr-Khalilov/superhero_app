module.exports = {
    root: true,
    env: {
        node: true,
        commonjs: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: '2022',
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
