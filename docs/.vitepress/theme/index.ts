import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import Carousel from "../components/Carousel.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // register your custom global components
        app.component('Carousel', Carousel)
    }
} satisfies Theme