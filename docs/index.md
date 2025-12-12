---
layout: home
hero:
  name: 'as-template-reference'
  text: 'A solid reference template for all your repos.'
  tagline: 'Build better projects, faster.'
---

<script setup>
const features = [
  {
    title: '1. Husky',
    description: 'Git hooks automation and configuration.',
    img: '/linkedin-posts/01-husky/1.jpg',
    link: '/pages/01-husky'
  },
  {
    title: '2. Branchlint',
    description: 'Branch naming convention validation.',
    img: '/linkedin-posts/02-branchlint/1.jpg',
    link: '/pages/02-branchlint'
  },
  {
    title: '3. Commitlint',
    description: 'Standardized commit message rules.',
    img: '/linkedin-posts/03-commitlint/1.jpg',
    link: '/pages/03-commitlint'
  },
  {
    title: '4. Documentation',
    description: 'Document code, components, and systems effectively.',
    img: '/linkedin-posts/04-documentation/1.jpg',
    link: '/pages/04-documentation'
  },
  {
    title: '5. Semantic release',
    description: 'Automate versioning and releases with semantic-release.',
    img: '/linkedin-posts/05-semantic-release/1.jpg',
    link: '/pages/05-semantic-release'
  },
  {
    title: '6. Commitizen',
    description: 'Unified, automated formatting for your codebase.',
    img: '/linkedin-posts/06-commitizen/1.jpg',
    link: '/pages/06-commitizen'
  },
  {
    title: '7. Eslint',
    description: 'Catch bugs early and enforce consistent code quality.',
    img: '/linkedin-posts/07-eslint/1.jpg',
    link: '/pages/07-eslint'
  },
  {
    title: '8. Prettier',
    description: 'Automatically format code for clean, consistent structure.',
    img: '/linkedin-posts/08-prettier/1.jpg',
    link: '/pages/08-prettier'
  }
]
</script>

<FeatureCards :features="features"></FeatureCards>
