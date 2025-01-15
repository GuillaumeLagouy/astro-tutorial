/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-svelte"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        trailingComma: "es5",
        tabWidth: 2,
        semi: true,
        singleQuote: true,
      },
    },
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
        trailingComma: "es5",
        tabWidth: 2,
        semi: true,
        singleQuote: true,
      },
    },
  ],
};
