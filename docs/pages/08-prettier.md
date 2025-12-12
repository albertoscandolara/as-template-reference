# Prettier

<Carousel :images="[
'/linkedin-posts/08-prettier/1.jpg',
'/linkedin-posts/08-prettier/2.jpg',
'/linkedin-posts/08-prettier/3.jpg',
'/linkedin-posts/08-prettier/4.jpg',
'/linkedin-posts/08-prettier/5.jpg',
]" />

## The problem

Every developer has a personal coding style.
The way we indent, use whitespace, write brackets, name things, or even decide where to break long lines… it all comes from our background, our habits, our previous teams, or even the editor we learned on.

That individuality is fine, until you work in a team or maintain a long-lived project.

Without a shared style:

- Codebases become inconsistent
- PR reviews devolve into nitpicking about formatting
- Developers waste time re-formatting code to "their" style
- Reading code written by others becomes slower
- Bugs hide inside inconsistent patterns
- Newcomers struggle to adapt to the project

## The tool: Prettier

Prettier is an **opinionated code formatter** that:

- completely ignores your original formatting
- parses the code into an [Abstract Syntax Tree (AST)](https://dev.to/balapriya/abstract-syntax-tree-ast-explained-in-plain-english-1h38)
- reprints it consistently, based on a maximum line length
- formats JavaScript, TypeScript, HTML, SCSS, Markdown, JSON, YAML, Angular templates, JSX, and more

It fixes all formatting issues **automatically**, is **fully deterministic**, offers very few configuration options, and eliminates style debates.
Combined with lint-staged and a Git hook, formatting becomes seamless and invisible.

## Prettier vs ESLint

Prettier and ESLint serve two different but complementary purposes.

Historically, ESLint handled both logic rules and stylistic rules, which caused conflicts and slowed down teams.
Prettier emerged as a dedicated, opinionated formatting tool, removing bikeshedding and ensuring consistency automatically.

Today, the recommended approach is:

- **Prettier formats your code**, taking care of indentation, line width, quotes, semicolons, trailing commas, spacing, and overall layout.
- **ESLint focuses on code quality**, enforcing best practices, detecting bugs, ensuring safe patterns, verifying imports and maintaining architectural conventions.

## The core idea

**Prettier’s purpose is not to enforce logic or best practices.**
Its role is to **ensure that all code looks the same**, so teams don’t waste time debating formatting and can focus on writing quality code.

## How it works

Prettier parses your code into an AST and rewrites it according to its rules, ignoring your original formatting.
The result is consistent, readable code across the entire codebase.

### Configuration

Prettier has minimal configuration to avoid bikeshedding.
You can tweak a few options like:

- Line width
- Tab width
- Single vs double quotes
- Trailing commas

Most teams adopt **very few changes**, relying on Prettier’s defaults for consistency.

### Plugins & extensions

Prettier supports plugins for additional languages or frameworks:
TypeScript, Angular templates, CSS, SCSS, Markdown, YAML, GraphQL, and more.

### Integrations everywhere

Editor extensions, CI pipelines, and pre-commit hooks make Prettier a formatting guardian.
Developers get immediate feedback, and the codebase stays disciplined automatically, without relying on memory or personal habits.

## CI Enforcement

Formatting rules are most effective when enforced automatically, not only locally but also during commits or builds.

### Pre-commit checks with Husky

**Husky** allows Git hooks to trigger automated checks. Combined with **lint-staged**, it applies Prettier only to files that are about to be committed.

Typical setup:

- Run Prettier only on staged files
- Automatically format them before committing
- Prevent unformatted code from entering the repository

### Pre-push or CI validation

For broader enforcement, a pre-push hook or a CI pipeline can run Prettier on the entire repository, ensuring consistent formatting across all branches.

## Useful links

- [Prettier](https://prettier.io/)
- [Eslint](./07-eslint.md)
- [Husky](./01-husky.md)
- [What is an Abstract Syntax Tree (AST)?](https://dev.to/balapriya/abstract-syntax-tree-ast-explained-in-plain-english-1h38)
- [AST explorer](https://astexplorer.net/)
