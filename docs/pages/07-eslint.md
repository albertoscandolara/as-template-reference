# ESLint

<Carousel :images="[
'/linkedin-posts/07-eslint/1.jpg',
'/linkedin-posts/07-eslint/2.jpg',
'/linkedin-posts/07-eslint/3.jpg',
'/linkedin-posts/07-eslint/4.jpg',
'/linkedin-posts/07-eslint/5.jpg',
'/linkedin-posts/07-eslint/6.jpg',
]" />

## The problem

JavaScript codebases grow fast, and without guardrails, small issues might turn into big maintenance headaches:

- Developers can introduce syntax errors, accidental globals, or unused variables **without noticing**.
- Inconsistent styles (quotes, spacing, naming) accumulate across the team, making the code harder to read and review.
- Manual code reviews often catch the same issues repeatedly, creating friction and wasted time.
- New contributors struggle to learn the expected style and conventions, increasing onboarding overhead.
- Subtle mistakes that JavaScript doesn’t warn about can ship to production unnoticed.
- Without automated checks, overall quality drifts over time, generating avoidable technical debt.

## The tool: ESLint

ESLint provides an automated safety net that can catch some issues early, keeps code consistent, and reduces review friction:

- Flags errors before runtime.
  Syntax slips, unused variables, accidental globals, and risky patterns are caught as you type.
- Enforces consistent code practices.
  Detects logic-related patterns (unused variables, unsafe comparisons, mis-scoped code, problematic imports) so the codebase behaves consistently.
- Reduces noise in code reviews.
  Reviewers stop commenting on formatting or obvious mistakes; they can focus on real logic.
- Helps new contributors onboard faster.
  The rules are documented in code, not in someone’s memory. The linter shows what's allowed.
- Fixes many issues instantly.
  With editor integration, most formatting and simple problems are repaired automatically on save.
- Keeps long-term quality stable.
  Automated checks prevent style drift, reduce technical debt, and keep the project maintainable as it grows.

## ESLint vs Prettier

ESLint and Prettier serve two different but complementary purposes.

Historically, ESLint handled both code-quality rules and visual consistency rules.
Over time, the JavaScript community realized that mixing these two responsibilities caused unnecessary complexity and rule conflicts.
Prettier emerged as a dedicated code formatter designed to handle all purely stylistic concerns automatically and consistently.

Today, the recommended approach is:

- **ESLint focuses on code quality**, enforcing best practices, detecting bugs, ensuring safe patterns, verifying imports and maintaining architectural conventions.
- **Prettier formats your code**, taking care of indentation, line width, quotes, semicolons, trailing commas, spacing, and overall layout.

## The core idea

**ESLint’s purpose is not to dictate how JavaScript should be written.**
Its role is to **let teams define their own conventions and enforce them consistently**, so all contributors produce code that follows the same shared expectations.

## How it works

ESLint inspects code and evaluates it against a set of rules.
These rules determine what is considered a problem, from potential bugs to unsafe patterns or project-specific constraints.

### Rules

Each rule expresses a specific expectation (“don’t leave unused variables”, “no unsafe code patterns”).
Rules can be strict or lenient, warn or error, enabled or disabled entirely.

### Team-driven configuration

The configuration file (`eslint.config.js`) is where the team agrees on:

- which rules exist in the project
- how strict each one is
- which file types they apply to
- which plugins or custom checks the project relies on

This makes ESLint a **team-alignment tool**, not a style police tool. The team defines the logic; ESLint enforces it consistently.

### Plugins and extensions

ESLint can be extended with plugins for TypeScript, Angular, security rules, import rules, regex checks, and more.
These aren’t “global standards”, rather collections of rules teams choose because they match their stack or architecture.

### Integrations everywhere

Editor extensions, CI pipelines, and pre-commit hooks make ESLint a background guardian.
Developers get immediate feedback, and the codebase stays disciplined automatically, without relying on memory or personal habits.

## CI Enforcement

Linting rules are most effective when they run automatically, not only on local machines, but also before code is committed or pushed.

### Pre-commit checks with Husky

**Husky** allows Git hooks to trigger automated checks. Combined with **lint-staged**, it applies ESLint only to files that are about to be committed.

Typical setup:

- A pre-commit hook runs ESLint on staged files.
- If any rule fails, the commit is blocked.
- Automatic fixes are applied when possible.

This prevents rule violations from ever entering the repository.

### Pre-push or CI validation

For broader enforcement, a pre-push hook or a CI pipeline can run ESLint on the entire repository. This ensures that even code not covered by pre-commit checks still conforms to the configured rules before integration.

## Useful links

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
