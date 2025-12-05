# Commitizen

<Carousel :images="[
'/linkedin-posts/06-commitizen/1.jpg',
'/linkedin-posts/06-commitizen/2.jpg',
'/linkedin-posts/06-commitizen/3.jpg',
'/linkedin-posts/06-commitizen/4.jpg',
'/linkedin-posts/06-commitizen/5.jpg',
'/linkedin-posts/06-commitizen/6.jpg',
'/linkedin-posts/06-commitizen/7.jpg',
]" />

## The problem

Having a commit message convention, and enforcing it with [**commitlint**](./03-commitlint.md) and [**Husky**](./01-husky.md), will block invalid messages from being recorded.

However, enforcement alone doesn't make the developer experience problem any better:

- Developers still must **remember the exact commit types** and message structure.
- They may waste time iterating (write → fail hook → rewrite) when the format is non-trivial.
- New contributors need a reference or training to learn the allowed types and scopes.
- Reliance on manual formatting increases friction and interrupts flow.

## The tool: commitizen

Commitizen provides a guided, interactive CLI that helps developers write clean, structured commit messages that follow the chosen convention, without having to remember the rules.

Developers simply run:

```
npm run commit
```

Commitizen then prompts them through a simple step-by-step workflow and generates a perfectly formatted commit message.

It enforces consistency **at creation time**, not afterward.

## Useful links

- [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [commitlint](./03-commitlint.md)
- [Husky](./01-husky.md)