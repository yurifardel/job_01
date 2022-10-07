module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },

    extends: "eslint:recommended",
    plugins: ["@html-eslint"],
    overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
    },
  ],
    rules: {
    },
}
