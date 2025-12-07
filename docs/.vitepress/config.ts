import { defineConfig } from 'vitepress';
import Carousel from './components/Carousel.vue';

export default defineConfig({
  title: "as-template-reference",
  description: "A solid reference template for all your repos.",
  base: "/", // Only set to "/docs" if deployed in a subfolder like GitHub Pages /docs

  themeConfig: {

    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: 'Husky', link: '/pages/01-husky' },
          { text: 'Branchlint', link: '/pages/02-branchlint' },
          { text: 'Commitlint', link: '/pages/03-commitlint' },
          { text: 'Documentation', link: '/pages/04-documentation' },
          { text: 'Semantic release', link: '/pages/05-semantic-release' },
          { text: 'Commitizen', link: '/pages/06-commitizen' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', ariaLabel: 'github', link: 'https://github.com/albertoscandolara' },
      { icon: 'linkedin', ariaLabel: 'linkedin', link: 'https://www.linkedin.com/in/alberto-scandolara-1391a1161/' }
    ],
  }
})
