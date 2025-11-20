# Commit Message Conventions (Conventional Commit)

This project enforces a strict and consistent commit message format based on the [Conventional Commits specification](https://www.conventionalcommits.org/).\
The goal is to ensure commit messages are readable, structured, automation-friendly, and easy for every developer on the team to understand and work with.

### Useful Links

- [Conventional commits specification](https://www.conventionalcommits.org/)
- [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
- [commitlint NPM package](https://www.npmjs.com/package/commitlint)
- [commitlint GitHub](https://github.com/conventional-changelog/commitlint)

## Why Commit Message Conventions?

Clear and consistent commit messages help to:

- **Improve clarity**: commit messages follow a predictable structure that makes them easy to read and understand.
- **Communicate intent**: each commit clearly expresses the purpose and impact of the change.
- **Simplify code reviews**: reviewers can quickly grasp what was done and why.
- **Maintain a clean history**: a standardized format results in a meaningful, navigable commit log.
- **Enable automation**: tools can automatically generate CHANGELOGs, determine version bumps, and trigger build or publish pipelines.
- **Support contributors**: new team members can easily understand the workflow and contribute more effectively.

---

## The Linter Used

Commit messages are validated with [commitlint](https://www.npmjs.com/package/commitlint).

Validation happens:
1. Locally via Husky (commit-msg)

---

## Conventional Commit Specification

These rules follow the [Conventional Commit](https://www.conventionalcommits.org/) standard:

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

Rules:
- lowercase
- must be one of the allowed types

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

### Subject

Rules:
- written in **imperative mood** ("add", "fix", not “added”)
- lowercase first letter
- no trailing period
- cannot be sentence-case/PascalCase/uppercase

---

## Body

Rules:
- must start after one blank line
- max 100 chars per line`

---

## Footer

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

---
