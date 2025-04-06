import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});
const eslintConfig = [
  ...compat.config({
    extends: [
      "next",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
    ],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "no-console": "warn",
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: ["enumMember"],
          format: ["PascalCase"],
        },
      ],
      /**
       * Rule for sorting imports.
       * @see {@link https://github.com/lydell/eslint-plugin-simple-import-sort/}
       */
      "simple-import-sort/imports": [
        "warn",
        {
          /**
           * Groups of regular expressions that determine order of imports
           * A new row is inserted in between the groups.
           * Imports in one group are not divided by empty rows.
           */
          groups: [
            ["^\\u0000"], // Imports of side effects
            [
              "^react", // Import for react
              "^@?\\w", // Starts with any character in a word or with @
            ],
            [
              "^[^.]", // Anything that does not start with dot
              "^\\.", // Anything that starts with dot
            ],
            ["module\\.scss$"], // Anything that ends with module.scss (i.e. styles)
          ],
        },
      ],
      /** Rule for sorting exports.*/
      "simple-import-sort/exports": "warn",
      "unused-imports/no-unused-imports": "warn",
      "@typescript-eslint/no-empty-interface": 0,
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error"
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module",
    },
    plugins: [
      "@typescript-eslint",
      "simple-import-sort",
      "react-hooks",
      "unused-imports",
    ],
    ignorePatterns: ["dist"],
  }),
];
export default eslintConfig;
