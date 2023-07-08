module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  ignorePatterns: [
    "node_modules/*",
    ".next/*",
    ".out/*",
    ".prettierrc",
    "public/*",
  ],
  extends: [
    "eslint:recommended",
    "next",
    "turbo",
    "prettier",
    "next/core-web-vitals",
  ],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
      parser: "@typescript-eslint/parser",
      settings: { react: { version: "detect" } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "prettier",
      ],
      rules: {
        "@next/next/no-html-link-for-pages": "off",
        "prettier/prettier": [
          "error",
          { endOfLine: "lf" },
          { usePrettierrc: true },
        ],
        "react/prop-types": "off",

        "no-console": ["warn", { allow: ["warn"] }],

        "react/react-in-jsx-scope": "off",

        "jsx-a11y/anchor-is-valid": "off",

        "jsx-a11y/img-redundant-alt": "off",

        "react/jsx-no-comment-textnodes": "off",

        "@typescript-eslint/no-unused-vars": ["warn"],
      },
    },
  ],
};
