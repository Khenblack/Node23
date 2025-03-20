import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import { rules } from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...tseslint.configs.recommended,
        rules: {
            ...tseslint.configs.recommended.rules, // Merge existing rules
            '@typescript-eslint/consistent-type-imports': 'warn', // Add the consistent-type-imports rule
        },
    },
    {
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
    prettierConfig,
];
