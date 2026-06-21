# MyStore — Udacity Angular E-Commerce Project

A fully functional single-page e-commerce web application built with Angular 11 and TypeScript.

## Project Description

MyStore allows users to browse a list of products, view product details, add items to a shopping cart, fill out a checkout form, and receive an order confirmation. The application reads product data from a local JSON file using Angular's `HttpClient`.

## Features

| Feature | Description |
|---|---|
| **Product List** | Displays all available products (photo, name, price) loaded from `assets/data.json` |
| **Product Detail** | Shows detailed information for a selected product (photo, name, price, description) |
| **Shopping Cart** | Shows added items with quantities and total cost; items can be updated or removed |
| **Checkout Form** | Collects customer name, address, and credit card number with client-side validation |
| **Order Confirmation** | Confirms the order and shows the customer's name and total charged |

---

## Getting Started (After Cloning)

Run the following commands **in order** after cloning the repository:

```bash
cd home
npm install
npm start
```

Then open your browser to **http://localhost:3000**

---

## Available Scripts

All scripts are run from inside the `home` directory:

| Command | What it does |
|---|---|
| `npm install` | Installs all project dependencies from `package.json` |
| `npm start` | Starts the development server at `http://localhost:3000` |
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