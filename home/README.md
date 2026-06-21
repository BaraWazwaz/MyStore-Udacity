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

## Installation

```bash
# Navigate to the home directory
cd home

# Install dependencies
npm install

# Serve the application
ng serve
```

Then open your browser to **http://localhost:4200**

## Tech Stack

- Angular 11
- TypeScript
- Angular HttpClient (reads `src/assets/data.json`)
- Angular Router (Single Page Application — no page reloads)
- Angular FormsModule (`ngModel`, form validation)

## Project Structure

```
home/src/app/
  models/           product.ts            (Product & CartItem interfaces)
  services/         product.service.ts    (loads data.json)
                    cart.service.ts       (manages cart state across components)
  components/       product-list/         (lists all products using *ngFor)
                    product-item/         (individual product card — @Input/@Output)
                    product-item-detail/  (single product detail view)
                    cart/                 (cart listing + checkout form)
                    confirmation/         (order success page)
  layout/           header/               (navigation bar with cart count badge)
```
