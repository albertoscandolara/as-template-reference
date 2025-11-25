import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import Carousel from "../components/Carousel.vue";
import FeatureCards from "../components/FeatureCards.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // register your custom global components
        app.component('Carousel', Carousel);
        app.component('FeatureCards', FeatureCards);
    }
} satisfies Theme