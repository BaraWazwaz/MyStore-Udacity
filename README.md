# MyStore — Angular E-Commerce Project

A clean single-page e-commerce application built with Angular 18 and TypeScript.

## Getting Started

To run the application locally, run these commands inside the `home` directory:

```bash
npm install
npm start
```

Then open your browser to **http://localhost:3000**

## Project Structure & Features

- **Product Catalog** — Browses a list of items loaded from `src/assets/data.json`
- **Product Details** — Displays detailed info for any selected product.
- **Shopping Cart** — Supports quantity adjustments, items deletion, and live price calculation.
- **Checkout & Confirmation** — Forms validated client-side, displaying a confirmation screen on success.

## Available Scripts

- `npm start` — Run development server on port 3000.
- `npm run build` — Build production bundle into the `dist/` directory.
- `npx tsc --noEmit` — Run TypeScript compiler type-check.