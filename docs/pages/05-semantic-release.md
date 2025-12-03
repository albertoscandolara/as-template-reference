# Semantic-release

<Carousel :images="[
'/linkedin-posts/05-semantic-release/1.jpg',
'/linkedin-posts/05-semantic-release/2.jpg',
'/linkedin-posts/05-semantic-release/3.jpg',
'/linkedin-posts/05-semantic-release/4.jpg',
'/linkedin-posts/05-semantic-release/5.jpg',
'/linkedin-posts/05-semantic-release/6.jpg',
'/linkedin-posts/05-semantic-release/7.jpg',
]" />

## The problem

Even with a clean commit history, releasing a project often remains **manual**, **error-prone**, and **inconsistent**.

This leads to several problems:

- **Manual versioning mistakes**: developers often misjudge whether a change is patch, minor, or major, leading to incorrect version bumps.  
- **Incorrect tags**: manual tagging in Git introduces inconsistencies or forgotten tags.  
- **Loss of meaning**: version numbers stop reflecting actual change impact over time.
- **Unreliable or outdated changelogs**: developers forget to update changelogs or update them inconsistently.
- **Release process depends on specific individuals**: only one or two people know the full release workflow.
- **Slower CI/CD and more manual steps**: releasing requires multiple commands and checks done by hand.
- **Reduced productivity**: developers avoid releasing because it feels heavy.
- **Breaking changes might slip into minor or patch releases**: humans misjudge the impact of a change.  
- **Unexpected regressions**: downstream consumers break despite “safe” version updates. 
- **Lower trust**: users fear upgrading the package.
- **Poor or inconsistent commit message discipline**: messages vary in structure, tone, and clarity.
- **Teams lack clear release notes**: changes aren’t documented in a centralized, predictable way.
- **Missing insights**: QA, product, and consumers lack visibility into what changed.
- **More support needs**: users open issues for things they could have read in release notes.
- **Release discipline decays over time**: without automation, people start skipping or altering steps.  
- **Process drift**: each release is slightly different from the previous one.
- **Higher long-term maintenance cost**: manual release overhead accumulates.
- **Slower development**: time spent on release logistics slows feature work.

---

## The tool: semantic-release

**semantic-release** automates the entire release process.

It reads commit messages and automatically:

- determines the next version number
- generates release notes and updates the changelog
- creates and pushes Git tags
- publishes the package (npm, GitHub Releases, GitLab, etc.)

No manual version bumps.
No hand-written changelogs.
No debates about “Is this a minor or a patch?”

Once configured, your CI pipeline runs semantic-release, and every release is generated consistently and automatically.

## Implementation strategy

- Conventional Commits enforced locally (commitlint + [Husky](./01-husky.md))
- A shared configuration (e.g., `.releaserc.json`)
- semantic-release run inside CI on specific branches (e.g., main, master)
- Automatic versioning + changelog + publishing on every merged commit

## The standard

semantic-release sticks to [Semantic versioning](https://semver.org/), which defines:

```
MAJOR.MINOR.PATCH
```

| Change type         | Meaning                                 | Version bump |
|---------------------|-----------------------------------------|--------------|
| **fix**             | bug fix, backward-compatible            | patch        |
| **feat**            | new feature, backward-compatible        | minor        |
| **BREAKING CHANGE** | backward-incompatible modification      | major        |

In practice:

- `fix(auth): resolve login issue` → **1.0.1**
- `feat(ui): add preferences panel` → **1.1.0**
- `feat(api)!: remove legacy endpoint` → **2.0.0**

semantic-release reads commit messages and applies these rules automatically.

## Conventional Commit Messages (the foundation)

semantic-release fully relies on commit messages structured like:

```
<type>(<scope>): <subject>

<body>

<footer>
```

This is why [commitlint](./03-commitlint.md) is essential: it guarantees that every commit is parseable by semantic-release.

### Types triggering releases

| Type      | SemVer impact            |
|-----------|--------------------------|
| fix       | patch                    |
| feat      | minor                    |
| BREAKING  | major                    |
| others    | no version bump          |

---

### How it works

When CI runs semantic-release:

1. It analyzes all commits since the last release.
2. Determines the required version bump.
3. Generates changelog entries.
4. Creates a Git tag (e.g., `v1.4.0`).
5. Publishes the release (npm, GitHub/GitLab release page, etc.).
6. Pushes updated files (e.g., `CHANGELOG.md`).

---

### Examples of commit messages and their release effect

```
fix(forms): correctly validate empty date fields
# → patch release (1.0.1)
```

```
feat(ui): add dark mode toggle
# → minor release (1.1.0)
```

```
feat(core)!: remove deprecated caching layer

BREAKING CHANGE: cache API was removed
# → major release (2.0.0)
```

```
chore(repo): reorganize scripts
# → no release
```

## Useful links

- [Semantic versioning](https://semver.org/)
- [Semantic release](https://github.com/semantic-release/semantic-release)
- [commitlint](./03-commitlint.md)
- [Husky](./01-husky.md)