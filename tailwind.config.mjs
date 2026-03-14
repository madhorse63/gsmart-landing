/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#E06C75',
          pink: '#F96C8E',
          coral: '#F46244',
        },
        brand: {
          pink: 'rgb(241 228 232)',
          lilac: '#F8F4F8',
          footer: '#FDF5F6',
        },
        copy: {
          dark: '#333333',
          medium: '#666666',
          light: '#6F6F6F',
        },
        border: {
          light: '#E0E0E0',
          mid: '#D0D0D0',
        },
        card: 'rgb(241 228 232)',
        link: '#2E8BC0',
      },
    },
  },
  plugins: [],
};
