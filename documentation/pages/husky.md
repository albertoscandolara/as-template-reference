# Husky

This project uses **Husky** to automate Git hooks and improve code
quality by running checks before commits or pushes.

Husky makes it easy to define actions such as linters, formatters, or
tests that run automatically as part of your development workflow.
It sets up a custom Git hooks directory and lets you define hook
scripts directly in the `.husky/` folder (e.g., `pre-commit`,
`pre-push`).

Typical uses include:

-   Running ESLint before committing\
-   Formatting code with Prettier\
-   Running unit tests before pushing\
-   Preventing bad commits from entering your repository

## Useful Links

- [husky NPM package](https://www.npmjs.com/package/husky)
- [husky github](https://github.com/typicode/husky)


## Installation

``` bash
npm install husky --save-dev
```

Then enable it:

``` bash
npx husky install
```

This creates a `.husky/` folder where you can add hooks, for example:

``` bash
npx husky add .husky/pre-commit "npm test"
```
