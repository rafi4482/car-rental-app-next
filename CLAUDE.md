# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Car rental application built with Next.js 16 (App Router), React 19, TypeScript 5, and Tailwind CSS v4.

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint (uses flat config with core-web-vitals and TypeScript rules)

## Architecture

- **Framework**: Next.js 16 with App Router (`app/` directory)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` plugin; theme variables defined inline in `app/globals.css`
- **Path alias**: `@/*` maps to the project root (configured in `tsconfig.json`)
- **Fonts**: Geist and Geist Mono loaded via `next/font/google` in `app/layout.tsx`
- **Dark mode**: CSS-based via `prefers-color-scheme` media query in `globals.css`
