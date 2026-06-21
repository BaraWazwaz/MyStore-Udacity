# MyStore — Udacity Angular E-Commerce Project

A fully functional single-page e-commerce web application built with Angular 11 and TypeScript.

## Project Description

MyStore allows users to browse a list of products, view product details, add items to a shopping cart, fill out a checkout form, and receive an order confirmation. The application reads product data from a local JSON file using Angular's `HttpClient`.

## Features

- **Product List** — Displays all available products (photo, name, price) loaded from `assets/data.json`
- **Product Detail** — Shows detailed information for a selected product (photo, name, price, description)
- **Shopping Cart** — Shows added items with quantities and total cost; items can be updated or removed
- **Checkout Form** — Collects customer name, address, and credit card number with client-side validation
- **Order Confirmation** — Confirms the order and shows the customer's name and total charged

---

## Getting Started (After Cloning)

Run the following commands **in order** after cloning the repository:

```bash
# 1. Navigate into the application directory
cd home

# 2. Install all dependencies (required before any other command)
npm install

# 3. Start the development server
npm start
```

Then open your browser to **http://localhost:4200**

> The app will automatically reload whenever you edit and save a source file.

---

## Available Scripts

All scripts are run from inside the `home` directory:

| Command | What it does |
|---|---|
| `npm install` | Installs all project dependencies from `package.json` |
| `npm start` | Starts the development server at `http://localhost:4200` (alias for `ng serve`) |
| `npm run build` | Compiles the app for production into the `dist/` folder |
| `npx ng serve` | Same as `npm start` — runs the dev server directly via Angular CLI |
| `npx ng serve --port 3000` | Runs the dev server on a custom port (e.g. 3000) |
| `npx ng generate component <name>` | Generates a new component (shorthand: `ng g c <name>`) |
| `npx ng generate service <name>` | Generates a new service (shorthand: `ng g s <name>`) |
| `npx tsc --noEmit` | Type-checks all TypeScript files without producing output (useful for catching errors) |

---

## Tech Stack

- **Angular 11** with Angular CLI
- **TypeScript** (all source files are `.ts` — no hand-written JavaScript)
- **Angular HttpClient** — reads product data from `src/assets/data.json`
- **Angular Router** — Single Page Application, no full page reloads during navigation
- **Angular FormsModule** — two-way binding via `ngModel`, template-driven form validation

---

## Project Structure

```
home/
├── src/
│   ├── assets/
│   │   └── data.json                    # Product data (6 products)
│   ├── app/
│   │   ├── models/
│   │   │   └── product.ts               # Product & CartItem TypeScript interfaces
│   │   ├── services/
│   │   │   ├── product.service.ts       # Loads products from data.json via HttpClient
│   │   │   └── cart.service.ts          # Manages cart state shared across components
│   │   ├── layout/
│   │   │   └── header/                  # Navigation bar with live cart item count badge
│   │   └── components/
│   │       ├── product-list/            # Product grid — uses *ngFor to render child items
│   │       ├── product-item/            # Product card — uses @Input() and @Output()
│   │       ├── product-item-detail/     # Full product detail page, loaded via route param
│   │       ├── cart/                    # Cart view + checkout form with validation
│   │       └── confirmation/            # Order success page after checkout
│   ├── main.ts                          # App bootstrap entry point
│   ├── polyfills.ts                     # Browser polyfills required by Angular
│   ├── styles.css                       # Global styles
│   └── index.html                       # Root HTML shell
├── angular.json                         # Angular CLI workspace configuration
├── tsconfig.json                        # TypeScript compiler configuration
└── package.json                         # Dependencies and npm scripts
```
