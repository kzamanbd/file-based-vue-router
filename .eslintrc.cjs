/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    settings: {
        'import/core-modules': ['vue-router/auto', 'vue-router/auto-routes']
    },
    rules: {
        'vue/multi-word-component-names': 'off'
    }
};
