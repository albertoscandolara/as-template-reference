# Commitizen

<Carousel :images="[
'/linkedin-posts/06-commitizen/1.jpg',
'/linkedin-posts/06-commitizen/2.jpg',
'/linkedin-posts/06-commitizen/3.jpg',
'/linkedin-posts/06-commitizen/4.jpg',
'/linkedin-posts/06-commitizen/5.jpg',
]" />

## The problem

Having a commit message convention, and enforcing it with [**commitlint**](./03-commitlint.md) and [**Husky**](./01-husky.md), will block invalid messages from being recorded.

However, enforcement alone doesn't make the developer experience problem any better:

- Developers still must **remember the exact commit types** and message structure.
- They may waste time iterating (write → fail hook → rewrite) when the format is non-trivial.
- New contributors need a reference or training to learn the allowed types and scopes.
- Reliance on manual formatting increases friction and interrupts flow.

## The tool: Commitizen

Commitizen provides a guided, interactive CLI that helps developers write clean, structured commit messages that follow the chosen convention, without having to remember the rules.

Developers simply run:

```
npm run commit
```

and the tool handles the rest of the workflow, prompting them with simple step-by-step questions to produce a perfectly formatted commit message.

![Commitizen demo](/linkedin-posts/06-commitizen/flow.gif)

It enforces consistency **at creation time**, not afterward.

## Wasn't Commitlint already enough?

Although they are often mentioned together, Commitizen and Commitlint serve **different purposes** in the commit workflow.

**Commitizen** is a _commit generator_.
It helps developers create a correctly structured commit message by guiding them through an interactive prompt. Commitizen improves developer experience, removes guesswork, and ensures that messages are consistent _before they are written_.

**Commitlint** is a _commit validator_.
It checks the final commit message (usually via a Husky `commit-msg` hook) and blocks the commit if it does not satisfy the rules of the chosen convention. Commitlint ensures that every message entering the repository actually respects the standard.

Because they work at different moments, they complement each other perfectly:

- **Commitizen reduces mistakes at creation time**
- **Commitlint enforces correctness at validation time**

Using both creates a commit workflow that is friendly for developers yet strict for the repository.
Developers don’t need to memorize the format, and the project never records malformed commit messages. The result is a clean, predictable commit history that enables automated changelogs, semantic versioning, and high-quality release processes.

## Useful links

- [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [Conventional commits specification](https://www.conventionalcommits.org/)
- [Commitlint](./03-commitlint.md)
- [Husky](./01-husky.md)
