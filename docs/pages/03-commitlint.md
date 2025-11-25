# Commit message conventions

<Carousel :images="[
'/linkedin-posts/03-commitlint/1.jpg',
'/linkedin-posts/03-commitlint/2.jpg',
'/linkedin-posts/03-commitlint/3.jpg',
'/linkedin-posts/03-commitlint/4.jpg',
'/linkedin-posts/03-commitlint/5.jpg',
'/linkedin-posts/03-commitlint/6.jpg',
'/linkedin-posts/03-commitlint/7.jpg',
]" />

## The problem

Without a commit message convention, commit histories quickly become unclear, inconsistent, and unhelpful for both humans and automation.

This leads to issues such as:

- **Lack of clarity**: commit messages vary wildly in format and quality, making them hard to read and understand.
- **Unclear intent**: reviewers and teammates cannot easily determine why a change was made.
- **Harder code reviews**: inconsistent messages slow down reviews and increase misunderstandings.
- **Messy history**: the commit log becomes noisy, fragmented, and difficult to navigate.
- **Broken automation**: tools cannot reliably generate CHANGELOGs, version bumps, or trigger pipelines if messages are unpredictable.
- **Steeper onboarding**: new contributors struggle to understand the project’s workflow without a clear structure.

## The tool: commitlint

**commitlint** ensures that every commit message in your project follows an agreed-upon convention, keeping your history clean, readable, and automation-friendly.

It ships with a default configuration (such as the widely used Conventional Commits standard), but you can fully customize the rules to match your team’s workflow.

## Implementation strategy

-   Validated locally using Husky hook (`commit-msg`)
-   Shared commitlint configuration
-   Configuration shared via `commitlint.config.js`


This project enforces a strict and consistent commit message format based on the [Conventional Commits specification](https://www.conventionalcommits.org/).\
The goal is to ensure commit messages are readable, structured, automation-friendly, and easy for every developer on the team to understand and work with.

## The standard

`commitlint.config.js` sticks to [Conventional commit standard](https://www.conventionalcommits.org/).

It defines the format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Where:
- `<type>` identifies the intention of the change
- `<scope>` (optional) specifies what area of the codebase is impacted
- `<subject>` is a short, imperative sentence describing what was done
- `<body>` (optional) explains motivation, describes context, list additional details, explains how the code solves the problem
- `<footer>` (optional) contains for meta-information

---

### Type

| Type     | Description              |
|----------|--------------------------|
| feat     | new feature              |
| fix      | bug fix                  |
| docs     | documentation            |
| style    | formatting only          |
| refactor | non-functional refactor  |
| perf     | performance improvements |
| test     | tests only               |
| build    | build/packaging changes  |
| ci       | CI configuration         |
| chore    | maintenance              |
| revert   | revert previous commit   |

Rules:
- lowercase
- must be one of the allowed types

### Semantic Versioning

| Commit style    | SemVer impact  |
|-----------------|----------------|
| fix             | patch          |
| feat            | minor          |
| BREAKING CHANGE | major          |
| other           | no bump        |

---

### Scope

Multiple scopes are allowed:
```
feat(api/db): add caching
```

---

### Subject

Rules:
- written in **imperative mood** ("add", "fix", not “added”)
- lowercase first letter
- no trailing period
- cannot be sentence-case/PascalCase/uppercase

---

### Body

Rules:
- must start after one blank line
- max 100 chars per line`

---

### Footer

### Metadata examples:
```
Refs: #123
Reviewed-by: John Doe
Co-authored-by: Alice
```

### BREAKING CHANGE

Two valid ways:

#### Footer style:
```
BREAKING CHANGE: removed old API
```

#### Using "!" in the header:
```
feat(core)!: remove deprecated API
```

---

### Examples of valid Commit Messages

```
feat(ui): add dark mode toggle with system preference detection
```
```
fix(forms): correctly validate empty date fields
```
```
docs(contributing): added conventonal commits section
```
```
chore(repo): reorganize scripts into /tools directory
```
```
feat(config)!: migrate settings to asynchronous loading
```
```
feat(payments)!: replace internal tax calculator with external service

BREAKING CHANGE: tax rules are now resolved via the /rates endpoint.
Clients must update their integration accordingly.

Closes: #904
```
```
perf(core): drop legacy change detection

BREAKING CHANGE: remove deprecated APIs
```

---

### Examples of invalid Commit Messages

```
update stuff
❌ too vague — no type, no scope, no meaningful description.               
```
```
fix:
❌ has a type but no description — incomplete commit message.
```
```
feat(auth) added new login logic and cleaned up old files and fixed some bugs
❌ mixed concerns — multiple unrelated actions in one commit message, plus no proper formatting.
```
```
feat: THIS IS A NEW DASHBOARD MODULE
❌ description should not be uppercase; also too generic and lacks scope.
```
```
bugfix(user): solve the thing that was breaking sometimes
❌ incorrect type (bugfix is not a valid Conventional Commit type) and unclear description.
```

## Useful links

- [NPM](https://www.npmjs.com/package/commitlint)
- [Conventional commits specification](https://www.conventionalcommits.org/)
- [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
- [Linkedin post](https://www.linkedin.com/posts/alberto-scandolara-1391a1161_branches-commitlint-husky-activity-7398749087132545026-FatO?utm_source=share&utm_medium=member_desktop&rcm=ACoAACamDX0BK3N7o8SxZvoV-hVVD9MzaGojAg4)
