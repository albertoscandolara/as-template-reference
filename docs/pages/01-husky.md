# Husky

<Carousel :images="[
    '/linkedin-posts/01-husky/1.jpg',
    '/linkedin-posts/01-husky/2.jpg',
    '/linkedin-posts/01-husky/3.jpg',
    '/linkedin-posts/01-husky/4.jpg'
]" />

## The problem

Modern projects often rely on linters, formatters, and tests to maintain
code quality.

But unless these tools run automatically, developers may:

-   forget to run ESLint or Prettier
-   accidentally push code that fails tests
-   commit inconsistent formatting
-   introduce regressions on protected branches

This leads to **unstable commits**, CI failures, and friction among the
team.

## The tool: Husky

**Husky** solves this by allowing you to run scripts at specific Git
hook stages.

It guarantees that checks ALWAYS run before actions such as:

-   `pre-commit`
-   `pre-push`
-   `commit-msg`
-   `prepare-commit-msg`

## Implementation strategy

I use Husky to:

-   run ESLint before committing
-   run tests before pushing
-   validate commit messages
-   enforce branch naming conventions

## Installation

``` bash
npm install husky --save-dev
```

``` bash
npx husky install
```

Example hook:

``` bash
npx husky add .husky/pre-commit "npm test"
```

## Useful links
- [NPM](https://www.npmjs.com/package/husky)
- [Linkedin post](https://www.linkedin.com/posts/alberto-scandolara-1391a1161_husky-activity-7395374131904471040-UBZ8?utm_source=share&utm_medium=member_desktop&rcm=ACoAACamDX0BK3N7o8SxZvoV-hVVD9MzaGojAg4)