# eslint-config-simian

SimiaCode&#39;s minimal eslint config.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-config-simian`:

```
$ npm install eslint-config-simian --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-simian-eslint-config` globally.

## Usage

Add `simian-eslint-config` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "extends": "simian"
}
```
