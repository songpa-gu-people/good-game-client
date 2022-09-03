module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
  ],
};
