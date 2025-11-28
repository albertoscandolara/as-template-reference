# Branch naming conventions

<Carousel :images="[
    '/linkedin-posts/02-branchlint/1.jpg',
    '/linkedin-posts/02-branchlint/2.jpg',
    '/linkedin-posts/02-branchlint/3.jpg',
    '/linkedin-posts/02-branchlint/4.jpg',
    '/linkedin-posts/02-branchlint/5.jpg',
    '/linkedin-posts/02-branchlint/6.jpg',
    '/linkedin-posts/02-branchlint/7.jpg',
]" />

## The problem

Without a naming standard, branches become inconsistent and unpredictable.

This leads to issues such as:

- **Unclear purpose**: developers can't immediately tell whether a branch is a feature, bugfix, hotfix, chore, or release.
- **Reduced collaboration**: it becomes harder to understand what others are working on at a glance.
- **Blocked automation**: CI/CD pipelines can't reliably trigger logic based on branch types (e.g., deployments from release).
- **Higher risk of mistakes**: accidental commits or merges into protected branches such as main or master become more likely.

## The tool: branch-name-lint

**branch-name-lint** ensures your team keeps a clear, trackable structure across all work streams.\
It comes with a default configuration, but you can also provide your own.

## Implementation strategy

-   Validated locally using Husky hook (`pre-push`)
-   Validated in CI using GitHub Actions
-   Configuration shared via `.branchlintrc.json`

## The standard

`.branchlintrc.json` sticks to [Conventional branch standard](https://conventional-branch.github.io/#specification).

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

### Examples of valid branch names

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

### Examples of invalid branch names

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

## Useful links

- [NPM](https://www.npmjs.com/package/branch-name-lint)
- [Conventional branch specification](https://conventional-branch.github.io/)
- [Linkedin post](https://www.linkedin.com/posts/alberto-scandolara-1391a1161_husky-branch-activity-7396929204744806400-s_tn?utm_source=share&utm_medium=member_desktop&rcm=ACoAACamDX0BK3N7o8SxZvoV-hVVD9MzaGojAg4)