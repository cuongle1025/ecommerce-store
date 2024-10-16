import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: ['node_modules/', 'dist/', 'build/', 'public/', '*.config.mjs'],
  },
  { files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'], rules: {} },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { settings: { react: { version: 'detect' } } },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  eslintPluginPrettierRecommended,
]
