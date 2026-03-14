import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Для GitHub Pages: замени 'landing' на имя своего репозитория (base должен совпадать с именем репо)
export default defineConfig({
  base: '/gsmart-landing/',
  integrations: [tailwind()],
});
