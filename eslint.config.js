import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Configuración base: entorno y opciones del analizador
  {
    languageOptions: {
      ecmaVersion: 'latest', // Versión más reciente de ECMAScript
      sourceType: 'module', // Usa módulos ES6
      globals: {
        ...globals.browser, // Variables globales del navegador
      },
    },
  },

  // Reglas recomendadas de ESLint para JavaScript
  pluginJs.configs.recommended,

  // Desactiva reglas de ESLint que entren en conflicto con Prettier
  prettierConfig,

  // Integración de Prettier como una regla de ESLint
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto', printWidth: 100 }], // Marca errores si el código no sigue las reglas de Prettier
    },
  },
];
