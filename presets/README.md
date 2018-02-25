Description
==

.editorconfig
--

For **VS Code** use "EditorConfig for VS Code" plugin.

.eslintrc
--

Requires to install of dependencies:

1. [eslint](https://www.npmjs.com/package/eslint).
1. [babel-eslint](https://www.npmjs.com/package/babel-eslint).
1. [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).
1. [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y).
1. [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import).
1. [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react).

For example, using `yarn`:

```
$ yarn add eslint babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react -D
```

.stylelintrc
--

Requires to install of dependencies:

1. [stylelint](https://www.npmjs.com/package/stylelint).
1. [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended).

For example, using `yarn`:

```
$ yarn add stylelint stylelint-config-recommended -D
```

pre-commit
--

1. Install [`pre-commit`](https://www.npmjs.com/package/pre-commit) and [`lint-staged`](https://www.npmjs.com/package/lint-staged) packages:

```
$ yarn add pre-commit lint-staged -D
```

2. Add set of npm scripts to package.json:

```json
{
  "pre-commit": "lint:staged"
}
```

3. Define script in section `script`:

```json
{
  "scripts": {
    "lint:staged": "lint-staged"
  }
}
```

4. Set `lint-staged` items:

```json
{
  "lint-staged": {
    "*.css": "lint:css",
    "*.js": "lint:js"
  }
}
```

5. Define scripts from the set:

```json
{
  "scripts": {
    "lint:css": "node_modules/.bin/stylelint *.css",
    "lint:js": "node_modules/.bin/eslint *.js"
  }
}
```
