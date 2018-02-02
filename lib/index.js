"use strict";

module.exports = {
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "script",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": ["node"],
  "env": {
    "node": true,
    "es6": true,
    "mocha": true,
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-console": "warn",
    "valid-jsdoc": [2, { "requireReturn": false }],
    "indent": ["error", 2],
    "node/no-missing-require": "error"
  }
};
