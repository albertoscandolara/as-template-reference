# Branch Naming Rules (Conventional Branch)


This project enforces a strict and consistent Git branch naming convention based on the [Conventional Branch specification](https://conventional-branch.github.io/#specification).\
The goal is to ensure branch names are readable, meaningful, automation-friendly, and easy for every developer on the team to understand and work with.

### Useful Links

- [Conventional branch specification](https://conventional-branch.github.io/#specification)
- [branch-name-lint NPM package](https://www.npmjs.com/package/branch-name-lint)
- [branch-name-lint GitHub](https://github.com/barzik/branch-name-lint/tree/main)

## Why Branch Naming Conventions?

Clear and consistent branch names help to:

- **Communicate purpose**: the branch name immediately tells you whether it's a feature, bugfix, hotfix, chore, or release.
- **Improve collaboration**: developers can quickly understand what others are working on.
- **Enable automation**: CI/CD workflows can trigger logic based on branch type (e.g., deployments from `release/*`).
- **Prevent mistakes**: avoids pushing to protected branches such as `main` or `master`.

---

## The Linter Used

Branch names are validated with [branch-name-lint](https://www.npmjs.com/package/branch-name-lint).

Validation happens in two places:
1. Locally via Husky (pre-push)
2. In CI via GitHub Actions

Both use the same base rules, but CI has special logic to skip protected branches.

---

## Conventional Branch Specification

These rules follow the [Conventional Branch](https://conventional-branch.github.io/#specification) standard:

It defines the format:

```
<type>/<description>
```

Where:
- `<type>` describes the purpose of the branch
- `<description>` briefly explains the work being done

---

### Type

| Type          | Description                                      |
|---------------|--------------------------------------------------|
| feature, fix  | new feature                                      |
| bugfix, fix   | bug fix                                          |
| hotfix        | urgent fixes                                     |
| release       | preparing a new release                          |
| chore         | maintenance, dependencies, documentation updates |

Rules:
- lowercase
- must be one of the allowed types

### Description

Rules:
- lowercase
- hyphen-separated
- concise 

---

## Local Linter Configuration

File: ```/.branchlintrc.json```

This file defines the complete set of rules used locally and in CI:

``` json
{
  "branchNameLinter": {
    "prefixes": [
      "feature",
      "feat",
      "bugfix",
      "fix",
      "hotfix",
      "release",
      "chore"
    ],

    "suggestions": {
      "feat": "feature",
      "fix": "bugfix",
      "hot": "hotfix",
      "releases": "release",
      "docs": "chore",
      "doc": "chore"
    },

    "banned": ["wip"],
    "skip": ["main", "master", "develop"],
    "disallowed": ["master", "develop", "staging"],
    "separator": "/",

    "regex": "^(feature|feat|bugfix|fix|hotfix|chore)\\/[a-z0-9]+(?:-[a-z0-9]+)*$|^release\\/v?[0-9]+(?:\\.[0-9]+)+$",
    "regexOptions": ""
  }
}
```

Highlights:

- Allows protected branches explicitly
- Disallows wip/* branches
- Enforces <type>/<description>
- Allows dot versions like release/v1.0.0
- Uses environment variable BRANCH_NAME

---

### Examples of valid Branch Names

```
feature/add-login-page
```
```
feat/issue-33-dark-mode
```
```
bugfix/fix-user-avatar
```
```
hotfix/security-patch
```
```
release/v1.3.2
```
```
chore/update-deps
```
```
develop
```
```
main
```
```
master
```

---

### Examples of invalid Branch Names

```
wip/test-stuff
❌ banned
```
```
bug/fix-header
❌ “bug” → “bugfix”
```
```
feature/too--many--dashes
❌ invalid format
```
```
feat/UPPERCASE
❌ must be lowercase
```

---