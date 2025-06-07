import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended, // Configurações recomendadas do ESLint
  {
    languageOptions: {
      ecmaVersion: 2022, // Ou a versão do ECMAScript que você está usando
      sourceType: "commonjs", // Seus arquivos .js são módulos CommonJS (padrão Node.js)
      // Mude para "module" se estiver usando import/export nativo do ES6
      globals: {
        ...globals.node,    // Globais do Node.js (require, module, process, etc.)
        ...globals.mocha,   // Globais do Mocha (describe, it, before, after, etc.)
      },
    },
    rules: {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Avisar sobre vars não usadas, ignorar args com _
      "no-console": "warn", // Desativa a regra que proíbe console.log (útil para debug em testes)
      "indent": ["error", 4], // Força indentação de 4 espaços
      "quotes": ["error", "single", { "avoidEscape": true }], // Força uso de aspas simples, mas permite aspas duplas se necessário
      "object-curly-spacing": ["error", "always"], // Espaçamento dentro de chaves de objetos
      "arrow-parens": ["error", "as-needed"], // Parênteses em arrow functions apenas quando necessário

      // Regras que podem ser úteis para qualidade de código:
      "eqeqeq": ["error", "always"], // Exige === e !== em vez de == e !=
      "no-var": "error", // Desencoraja o uso de var, prefira let/const
      "prefer-const": "error", // Sugere usar const se uma variável não for reatribuída
    },
    ignores: ["node_modules/", "mochawesome-report/", "eslint.config.mjs"] // Pastas a serem ignoradas
  },
];