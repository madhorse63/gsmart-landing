# Лендинг (Astro + Tailwind)

Статический лендинг на [Astro](https://astro.build) и [Tailwind CSS](https://tailwindcss.com).

## Запуск

```bash
cd landing
npm install
npm run dev
```

Откройте [http://localhost:4321](http://localhost:4321).

## Сборка

```bash
npm run build
```

Результат в `dist/`. Для предпросмотра: `npm run preview`.

## Структура

- `src/layouts/Layout.astro` — общий шаблон
- `src/pages/index.astro` — главная страница
- `src/components/` — Hero, Features, CTA, Footer
- `src/styles/global.css` — глобальные стили и Tailwind
- `public/` — статика (favicon и т.д.)

Тексты и ссылки в компонентах можно менять через пропсы или прямо в разметке.
