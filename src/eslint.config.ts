import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.node } }, // <-- Mudei de browser para node
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
