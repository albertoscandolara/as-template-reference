---
layout: home
hero:
  name: "as-template-reference"
  text: "A solid reference template for all your repos."
  tagline: "Build better projects, faster."
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
  }
]
</script>

<FeatureCards :features="features"></FeatureCards>
