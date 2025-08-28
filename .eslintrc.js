// .eslintrc.js

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
    },
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['.next/', 'out/', 'dist/', 'node_modules/', 'public/'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
