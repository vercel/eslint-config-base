module.exports = {
  extends: ["airbnb", "plugin:flowtype/recommended", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ["flowtype"]
};
