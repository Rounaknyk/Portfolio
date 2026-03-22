# Portfolio Website — LENA MOREL

## Overview
A portfolio website for a brand strategist & art director, featuring minimal editorial design with serif/sans-serif typography mix, monochromatic green color scheme, and smooth Motion v12 animations. Supports English and Japanese bilingual switching.

## Tech Stack
- React 19 + TypeScript + Vite 6
- Tailwind CSS v3 (class-based dark mode)
- Motion v12 (import from "motion/react")
- react-i18next for i18n (en/ja)
- Google Fonts: DM Serif Display, DM Sans, Noto Sans JP

## Structure
- `src/config/siteConfig.ts` — All business data (name, email, projects, clients)
- `src/i18n/` — i18n config and translation files (en/ja)
- `src/components/` — Shared components (Header, Footer, Layout, etc.)
- `src/pages/` — Page components (Home, About, Works, ProjectDetail)

## Key Conventions
- All UI text uses `useTranslation()` + `t()` calls
- Business data (names, emails, URLs) comes from siteConfig, not translated
- CSS variables for theming (see index.css :root and .dark)
- Tailwind custom colors map to CSS variables
- Every `<img>` has an onError fallback to picsum.photos
