import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: ['**/eslint.config.mjs'],
    },
    ...compat.extends('plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'),
    {
        plugins: {
            '@typescript-eslint': typescriptEslint,
        },

        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'module',
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: '.',
            },
        },
        rules: {
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            camelcase: 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/prefer-default-export': 'off',
            'import/no-relative-packages': 'off',
            'no-plusplus': 'off',
            'max-classes-per-file': 'off',
            'import/extensions': 'off',
            'no-useless-constructor': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            'class-methods-use-this': 'off',
            'no-underscore-dangle': 'off',
            'no-async-promise-executor': 'off',

            indent: [
                'error',
                4,
                {
                    SwitchCase: 1,
                    flatTernaryExpressions: true,
                },
            ],

            'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
            '@typescript-eslint/no-empty-function': 'off',
            'prefer-regex-literals': 'off',
            'no-promise-executor-return': 'off',
            'default-param-last': 'off',

            'max-len': [
                'error',
                {
                    code: 140,
                },
            ],
        },
    },
];
