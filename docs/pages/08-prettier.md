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
- PR reviews devolve into nitpicking
- Developers waste time re-formatting code to “their” style
- Reading code written by others becomes slower
- Bugs hide inside inconsistent patterns
- Newcomers struggle to adapt to the project

## The tool: Prettier

Prettier is an opinionated code formatter that:

- completely ignores your original formatting
- parses the code into an AST
- reprints it consistently, based on a maximum line length
- formats JavaScript, TypeScript, HTML, SCSS, Markdown, JSON, YAML, Angular templates, JSX, and more

It fixes 100% of formatting issues automatically, is fully deterministic, offers very few configuration options, and eliminates debates about style.
Combined with lint-staged and a Git hook, formatting becomes seamless and invisible.

## Prettier vs ESLint

Prettier and ESLint work side by side, but they solve different problems.

Prettier was created to take over one responsibility that ESLint historically tried to cover as well: code formatting.
In the early days, ESLint enforced both logic rules and stylistic rules.
This overlap led to configuration conflicts, slowdowns, and inconsistent formatting across teams.

Prettier streamlined this by becoming the single, opinionated tool dedicated entirely to formatting.
It removes bikeshedding, applies consistent styles automatically, and eliminates formatting debates.

Today, the recommended approach is:

- **Prettier formats your code**, taking care of indentation, line width, quotes, semicolons, trailing commas, spacing, and overall layout
- **ESLint focuses on code quality**, enforcing best practices, detecting bugs, ensuring safe patterns, verifying imports and maintaining architectural conventions.

## Useful links

- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
