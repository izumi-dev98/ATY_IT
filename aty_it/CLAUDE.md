# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

- **React 19** with Vite for bundling and dev server
- **Tailwind CSS v4** for styling (configured via `@tailwindcss/vite` plugin)
- **ESLint** with flat config for linting (React Hooks + React Refresh plugins)
- Entry point: `index.html` → `src/main.jsx` → `src/App.jsx`
- Uses Oxc-based `@vitejs/plugin-react` for faster transpilation

## ESLint Configuration

Flat config in `eslint.config.js` ignores `dist/` and enforces React Hooks rules. Unused variables starting with `[A-Z_]` are allowed (for unused React components).
