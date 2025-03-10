module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-console": 0,
    "camelcase": 0,
    "arrow-body-style": 0,
    "jsx-a11y/anchor-is-valid": ["error", {
      "aspects": ["invalidHref", "preferButton"]
    }],
    "jsx-a11y/click-events-have-key-events": 0,
    "react/no-array-index-key": 0,
    "max-len": 0,
    "react/no-danger": 0,
    "react/no-did-update-set-state": 0,
    "object-curly-newline": 0,
    "import/prefer-default-export": 0,
    "no-throw-literal": 0,
  },
};
