# Pimjo E-commerce (Next.js App Router)

A mini eCommerce web app built as a submission for the FED25 assignment. Features a pixel-perfect landing page from Figma, authentication, and a protected dashboard with custom APIs.

Live demo: https://pimjo-ecom-dusky.vercel.app/

## Features

- **Landing Page**: Pixel-perfect responsive design from Figma using Tailwind CSS
- **Authentication**: Login/Register with custom API routes
- **Dashboard**: Protected eCommerce dashboard with summary stats, products, and orders
- **CRUD Operations**: Full Create, Read, Update, Delete for products
- **Search & Filter**: Product search and filtering functionality
- **Dark Mode**: Complete dark mode support across the app
- **Custom APIs**: In-app mock APIs for products, orders, and stats
- **Loading & Error States**: Proper handling for API fetches

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: Custom API with httpOnly cookies
- **Data**: Mock in-memory JSON data

## Prerequisites

- Node.js 18+ or later (recommended 18.x or 20.x)
- npm, yarn, or pnpm as package manager
- Git

Verify installation:

```bash
node -v
npm -v
```

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd ecom-pimjo
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and visit:
   - http://localhost:3000 — Landing page
   - http://localhost:3000/sign-in — Login page
   - http://localhost:3000/dashboard — Protected dashboard

## Authentication

- **Credentials**: `admin@example.com` / `admin123` (hard-coded for demo)
- **Sign-in**: `POST /api/auth/signin` — Sets httpOnly cookie `token` (expires in 1 hour)
- **Sign-out**: `POST /api/auth/signout` — Clears the cookie
- Dashboard routes are protected and redirect to login if not authenticated

## API Endpoints

The app includes custom Next.js API routes serving mock data:

- `GET /api/products` — Returns list of products
- `POST /api/products` — Create new product
- `PUT /api/products` — Update existing product
- `DELETE /api/products?id={id}` — Delete product by ID
- `GET /api/orders` — Returns list of orders
- `GET /api/stats` — Returns dashboard summary statistics

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── products/
│   │   ├── orders/
│   │   └── stats/
│   ├── (auth)/
│   ├── (dashboard)/
│   └── ...
├── components/
│   ├── dashboard/
│   ├── homepage/
│   ├── Products/
│   └── ui/
├── lib/
│   ├── api.ts
│   └── mockData.ts
├── store/
└── types.ts
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint

## Notes

- Images in `public/` are referenced with leading slash for `next/image`
- Auth token is a demo base64 string — use NextAuth or proper sessions for production
- Mock data resets on server restart
- All styling uses Tailwind CSS utility classes only
