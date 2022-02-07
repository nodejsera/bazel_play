module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
