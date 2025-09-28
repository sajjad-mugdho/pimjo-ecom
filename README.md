# Pimjo E‑commerce (Next.js App Router)

Live demo: https://pimjo-ecom-dusky.vercel.app/

---

## Prerequisites

- Node.js 18+ or later (recommended 18.x or 20.x).
- npm, yarn, or pnpm as the package manager.
- Git (to clone the repository).

Verify Node.js and npm are inKeep it short: this repo is a working submission for the assignment - Landing Page, Auth, Dashboard + APIs.stalled:

```bash
node -v
npm -v
```

---

## Quick start (development)

1. Clone and install

```bash
git clone <repo-url>
cd ecom-pimjo
npm install
```

2. Run

```bash
npm run dev
```

3. Visit

- http://localhost:3000 — landing
- http://localhost:3000/sign-in — login
- http://localhost:3000/dashboard — dashboard (protected)

Auth (dev-only)

- Allowed credentials: `admin@example.com` / `admin123` (hard-coded)
- Sign-in endpoint: `POST /api/auth/signin` — sets httpOnly cookie `token` (1 hour)
- Sign-out endpoint: `POST /api/auth/signout` — clears cookie

# Pimjo E‑commerce — FED25 assignment (short)

Mini eCommerce: Landing page (Tailwind), simple auth, and a protected dashboard backed by in-app mock APIs.

Quick start

```bash
git clone <repo-url>
cd ecom-pimjo
npm install
npm run dev
```

Open: http://localhost:3000 (landing) — /sign-in (login) — /dashboard (protected)

Auth (dev)

- Use: admin@example.com / admin123
- POST /api/auth/signin (sets httpOnly cookie `token`) — POST /api/auth/signout (clears it)

Dashboard APIs (mock)

- GET /api/products
- GET /api/orders
- GET /api/stats

Scripts

- `npm run dev`, `npm run build`, `npm start`, `npm run lint`

Notes

- Images in `public/` should be referenced with a leading slash (for `next/image`).
- The auth token is a demo base64 string — replace with NextAuth or a proper session for production.

Want me to: add CRUD APIs, persist sidebar state, or convert auth to NextAuth? Say which and I'll open a branch.
