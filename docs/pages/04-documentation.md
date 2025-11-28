# Documentation

<Carousel :images="[
    '/linkedin-posts/04-documentation/1.jpg',
    '/linkedin-posts/04-documentation/2.jpg',
    '/linkedin-posts/04-documentation/3.jpg',
    '/linkedin-posts/04-documentation/4.jpg',
    '/linkedin-posts/04-documentation/5.jpg',
    '/linkedin-posts/04-documentation/6.jpg',
    '/linkedin-posts/04-documentation/7.jpg'
]" />

## The problem

Documentation is often either not present at all or overlooked and seen as a waste of time. 
Nonetheless, when teams grow and systems become more complex, **knowledge doesn't scale unless it's documented**.

Without a standard and a shared **culture of documentation**, you end up with:

-   **Hidden knowledge**: key logic or business rules known only by one person. If that person leaves... 💣💣💣
-   **Slow onboarding**: new developers depend on flawed and/or scattered knowledge instead of structured docs.
-   **Harder maintenance**: debugging, refactoring, and extending features become more risky.
-   **Poor integrations**: external teams struggle to consume your APIs, events, or data flows.
-   **Higher support load**: the same questions come back repeatedly.
-   **Out-of-sync implementations**: code evolves but documentation doesn't. This is more dangerous than not having at all.


## The solution: a layered documentation strategy

At the moment I adopted a three-level approach, where each tool serves a distinct purpose and a specific audience.

⚠️ **Important**:\
**These tools are not mutually exclusive**. Each project might require its own mix of documentation types depending on **scope** and **audience**.

---

### 1. Technical API documentation

### Tools that generate technical API docs
Several tools are involved and can generate API-level documentation directly from source code:

- [TypeDoc](https://typedoc.org/) (TypeScript)
- [JSDoc](https://jsdoc.app/) (JavaScript)
- [TSDoc](https://tsdoc.org/) (specification, used by multiple generators)
- [Compodoc](https://compodoc.app/) (Angular)
- [Swagger](https://swagger.io/) (HTTP APIs)

### Tools I use
- **TypeDoc** — a simple, ready-to-use, no-frills solution that generates clear documentation directly from real code + TSdoc/JSDoc comments.
- **Compodoc** — when it comes to Angular-specific projects, Compodoc is my way to go. It documents modules, components, services, decorators, and templates, and it also provides relational diagrams that help visualize the structure and relationships within an Angular application.

### When
Use API documentation whenever a package exposes functions, classes, types, services, or utilities for external developers.

### Focus
Low-level, source-code-driven definitions and behavior.

### Covers
- Public, protected, or private members
- Classes, interfaces, types, enums, functions, and utilities
- Constructor signatures, parameters, and return values
- Generics, constraints, and overloads
- Side effects and assumptions
- Module and package boundaries
- Inline usage examples
- 
> Documenting non-public members can greatly enhance the developer experience by improving IDE tooltips and in-editor discoverability.

### Characteristics
- Generated automatically from source code
- Always aligned with the implementation
- Objective and factual
- No business context

### Audience
Developers consuming the library or module.

## Examples
[as-const-lib](https://as-const-lib.netlify.app/modules)
[as-mixins-lib](https://as-mixins-lib.netlify.app/)

---

### 2. Component-level documentation

### Tools that generate component documentation
Several tools can be used to document UI components and their behavior:

- [Storybook](https://storybook.js.org/) (React, Angular, Vue, Web Components, etc.)
- [Pattern Lab](https://patternlab.io/) (Design systems)
- [Backlight](https://backlight.dev/) (Component collaboration platform)

### Tools I use
- **Storybook** — because it provides an interactive, visual environment for exploring, testing, and documenting UI components in isolation.

### When
Use component-level documentation when a package exports UI elements or reusable frontend components.

### Focus
How components **look**, **behave**, and **should be used**.

### Covers
- Interactive previews and playgrounds
- Props/inputs and events/outputs
- Component states (loading, empty, error, selected…)
- Variants, themes, and styling options
- Accessibility notes (ARIA, keyboard navigation)
- Usage examples and recommended patterns
- Do/Don’t guidelines

### Characteristics
- Bridges designers and developers
- Acts as a living, visual reference
- Ideal for design systems and component libraries
- Focuses on UI behavior and interaction
- Encourages isolated testing and exploration

### Audience
Frontend developers, designers, QA, and anyone working with UI components.

### Examples
[as-threejs-flags-lib](https://as-threejs-flags-lib.netlify.app/)

---

### 3. High-level conceptual documentation

### Tools for high-level documentation
Tools focused on explaining concepts, architecture, and system-wide reasoning:

- [VitePress](https://vitepress.dev/) (Lightweight, fast, Markdown-based)
- [Docusaurus](https://docusaurus.io/) (Full-featured documentation sites)
- [MkDocs](https://www.mkdocs.org/) (Python-based, simple static docs)
- [GitBook](https://www.gitbook.com/) (Hosted documentation)
- [Read the Docs](https://readthedocs.org/) (Auto-generated docs from repos)

### Tools I use
- **VitePress** — mainly because it fits naturally into the Vite ecosystem I’m already using. I like its style, speed, and built-in features, even though I’m not entirely satisfied with how it handles custom Vue component integration and styling.

### When
Use high-level conceptual documentation when the goal is to explain **architecture**, **flows**, **reasoning**, and the decisions behind the system.

### Focus
Understanding how the system works **as a whole**, not just individual components or APIs.

### Covers
- Business rules and domain concepts
- System flows and use cases
- Architecture decisions (ADRs)
- Onboarding guides
- Integration and setup instructions
- Diagrams (sequence, flowcharts, state machines)
- Release notes and migration guides

> This documentation focuses on *why things are the way they are*, not just *how they work*.

### Characteristics
- Descriptive, conceptual, and narrative
- Explains **why** and **when**, not only **how**
- Ideal for aligning across teams and roles
- Perfect for documenting thought processes and architectural decisions

### Audience
Stakeholders, new hires, recruiters, product owners, and developers seeking context and system understanding. 

### Examples
[as-template-reference (this one)](https://as-template-reference.netlify.app/)

---

### Documentation as Communication: Know Your Audience

Choosing how to document something depends entirely on **who is supposed to read it**.

| **Audience**                    | **Need**                                  | **Used tool**   |
|---------------------------------|-------------------------------------------|-----------------|
| Developers using my library     | Exact API, boundaries, contracts          | TypeDoc         |
| Designers + frontend developers | UI behavior, states, variations           | Storybook       |
| Stakeholders & new developers   | System understanding, architecture, flows | VitePress       |
| Testers & developers            | Expected behavior, constraints            | Automated tests |

---

### Tests are documentation too

Automated tests implicitly document:

- Expected behaviors
- Edge cases
- Invalid input handling
- Domain constraints
- Business rules expressed as assertions

While not a replacement for written documentation, tests provide a reliable, executable source of truth for developers.

---

## Useful links

- [TypeDoc](https://typedoc.org/)
- [Compodoc](https://compodoc.app/)
- [Storybook](https://storybook.js.org/)
- [VitePress](https://vitepress.dev/)

My WIP libs used in the CV
- [as-const-lib](https://as-const-lib.netlify.app/modules)
- [as-design-system-lib](https://as-design-system-lib.netlify.app/)
- [as-mixins-lib](https://as-mixins-lib.netlify.app/)
- [as-threejs-flags-lib](https://as-threejs-flags-lib.netlify.app/)
- [as-template-reference](https://as-template-reference.netlify.app/)