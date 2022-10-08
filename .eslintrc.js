module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'object-curly-spacing': [
            'error',
            'always',
            { objectsInObjects: false },
        ],
        'no-constant-condition': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
    },
};
