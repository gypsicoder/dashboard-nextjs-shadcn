# 📊 Dashboard App — Next.js + shadcn/ui

An admin dashboard application built with Next.js, TypeScript, shadcn/ui, and TailwindCSS. Features revenue analytics, transaction tracking, visitor charts, todo management, and a paginated payments table with filtering.

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-black?logo=shadcnui)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel)

🔗 **[Live Demo](https://dashboard-nextjs-shadcn-navy.vercel.app/)**

---

## Pages

| Page | Route | What it shows |
|------|-------|---------------|
| **Dashboard** | `/` | Revenue cards, latest transactions, visitor charts, todo list, popular content |
| **Payments** | `/payments` | Paginated data table with status filters, row selection, and action menus |

---

## Features

- **Revenue Analytics** — Total revenue card with summary metrics
- **Transactions Feed** — Latest transactions with user avatars, descriptions, and amounts
- **Visitor Charts** — Interactive charts showing traffic trends over 6 months with growth indicators
- **Todo List** — Date-based task management
- **Popular Content** — Content cards ranked by engagement with category labels
- **Payments Table** — Sortable, paginated data table (36 records, 4 pages) with status badges (success, pending, failed), row selection, and action menus
- **Collapsible Sidebar** — Toggle sidebar navigation for more screen space
- **Dark / Light Mode** — Theme toggle with persistent preference
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Image Optimization** — Using `next/image` for lazy loading and format conversion

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js** | React framework with App Router and SSR |
| **TypeScript** | Type-safe development (96.6% of codebase) |
| **shadcn/ui** | Accessible, customizable component library |
| **TailwindCSS** | Utility-first styling |
| **Geist Font** | Vercel's modern typeface |
| **pnpm** | Fast, disk-efficient package manager |
| **Vercel** | Deployment and hosting |

---

## shadcn/ui Components Used

Cards, Data Tables, Sidebar, Dropdown Menus, Avatars, Badges, Buttons, Charts, Pagination, Checkbox (row select), and Theme Toggle.

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/gypsicoder/dashboard-nextjs-shadcn.git
cd dashboard-nextjs-shadcn

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## Project Structure

```
dashboard-nextjs-shadcn/
├── src/
│   ├── app/           # Next.js App Router pages
│   └── components/    # shadcn/ui and custom components
├── public/            # Static assets
├── components.json    # shadcn/ui configuration
├── next.config.ts     # Next.js configuration
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json
```

---