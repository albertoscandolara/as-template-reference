# Branch Naming Rules (Conventional Branch)


This project enforces a strict and consistent Git branch naming convention based on the [Conventional Branch 1.0.0](https://conventional-branch.github.io/#specification) specification.\
The goal is to ensure branch names are readable, meaningful, automation-friendly, and easy for every developer on the team to understand.

### Useful Links

- [Conventional branch specification](https://conventional-branch.github.io/#specification)
- [branch-name-lint NPM package](https://www.npmjs.com/package/branch-name-lint)
- [branch-name-lint github](https://github.com/barzik/branch-name-lint/tree/main)

## Why Branch Naming Rules?

Clear and consistent branch names help to:

-   **Communicate purpose**: the branch name immediately tells you whether it's a feature, bugfix, hotfix, chore, or release.
-   **Improve collaboration**: developers can quickly understand what others are working on.
-   **Enable automation**: CI/CD workflows can trigger logic based on branch type (e.g., deployments from `release/*`).
-   **Prevent mistakes**: avoids pushing to protected branches such as `main` or `master`.

------------------------------------------------------------------------

## The Linter Used

Branch names are validated using: [branch-name-lint](https://www.npmjs.com/package/branch-name-lint) is used.

Validation happens in two places:
1. Locally, through Husky

A pre-push Git hook checks your branch name before the push is allowed.

Config file: ```/.branchlintrc.json```

2. In CI, through GitHub Actions

A workflow validates branch names in PRs and pushes.

Config file: ```/.branchlintrc-ci.json```

This double protection ensures nobody can bypass the rules — intentionally or accidentally.

------------------------------------------------------------------------

## Conventional Branch Specification

Our rules follow the [Conventional Branch 1.0.0](https://conventional-branch.github.io/#specification) naming standard:

It defines the format:

    <type>/<description>

Where `<type>` describes the purpose of the branch and `<description>`
briefly explains the work being done.

Valid types include:

-   `feature`, `feat` --- new features
-   `bugfix`, `fix` --- bug fixes
-   `hotfix` --- urgent fixes
-   `release` --- preparing a new release
-   `chore` --- maintenance, dependencies, documentation updates

Descriptions must be lowercase, hyphen-separated, and concise (e.g.,
`feature/add-login-page`).

------------------------------------------------------------------------

## Local Linter Configuration

File: ```/.branchlintrc.json```

This config is used by Husky before pushing a branch.

``` json
{
  "prefixes": [
    "feature",
    "feat",
    "bugfix",
    "fix",
    "hotfix",
    "release",
    "chore"
  ],
  "disallowed": ["main", "master", "develop"],
  "regex": "^(feature|feat|bugfix|fix|hotfix|release|chore)\\/[a-z0-9]+(?:-[a-z0-9]+)*$",
  "regexOptions": "i"
}
```

------------------------------------------------------------------------

## CI Linter Configuration

File: ```/.branchlintrc/ci.json```

CI should validate most branches but **must allow merges and PRs into main/master/develop**.

``` json
{
  "prefixes": ["feature", "bugfix", "fix", "feat", "hotfix", "release", "chore"],
  "disallowed": ["main", "master", "develop"],
  "skip": ["main", "master", "develop"]
}
```
Meaning:
- These protected branches are still considered invalid branch names (cannot name a working branch main)
- But CI skips validation when the branch being checked is one of them, enabling merges without failing the workflow

------------------------------------------------------------------------

## Why Two Separate Configs?

- Local (Husky) = strict

Developers must name branches correctly before pushing.

- CI = safe

CI validates almost everything but does not block merges to protected branches.

This makes the workflow:

| Workflow Stage                 | Enforced? | Reason                                         |
|--------------------------------|-----------|------------------------------------------------|
| Developer pushes a branch      | Yes       | Ensures local consistency                      |
| Create PR                      | Yes       | Ensures branch is valid                        |
| Merge into main/master/develop | Allowed   | These branches are intentionally skipped in CI |

------------------------------------------------------------------------

### Examples of Valid Branch Names

    feature/add-login-form
    feat/issue-123-dark-mode
    bugfix/fix-header-alignment
    fix/crash-on-startup
    hotfix/security-token-patch
    release/v1.4.0
    chore/update-dependencies

------------------------------------------------------------------------