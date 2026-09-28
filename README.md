# Covercraft

> Craft tailored cover letters (Bewerbungsschreiben) in minutes — and export them as polished PDFs.

![screenshot](https://itisbens.vercel.app/assets/covercraft-DGhqBCYA.png)

## Overview

Covercraft is a full-stack web application for creating, managing, and exporting job application cover letters. It is built with the Next.js App Router, uses Prisma for data persistence, and ships with a clean, accessible UI based on Tailwind CSS and Radix UI (shadcn/ui).

## Features

- **Cover letter creation**: write and edit application letters through a guided form
- **PDF export**: generate ready-to-send PDFs directly in the browser (jsPDF)
- **User accounts**: secure sign-up / login with hashed passwords (bcrypt) and JWT sessions (jose)
- **Persistent storage**: your letters are stored per user via Prisma
- **Route protection**: authentication enforced through Next.js middleware
- **Dark / light theme**: powered by `next-themes`
- **Responsive UI**: works on desktop and mobile

> ✏️ Adjust this list to match what is actually implemented (e.g. AI-assisted generation, templates, multiple languages).

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router), React 19, TypeScript |
| Styling | Tailwind CSS, `tailwindcss-animate` |
| UI components | [shadcn/ui](https://ui.shadcn.com/) on top of Radix UI, Lucide icons, Sonner toasts |
| Forms & validation | React Hook Form, Zod |
| Database / ORM | [Prisma](https://www.prisma.io/) |
| Auth | bcryptjs, jose, jsonwebtoken |
| PDF | jsPDF |
| Deployment | Vercel |

## Project Structure

```
Covercraft/
├── app/            # Next.js App Router (pages, layouts, API routes)
├── components/     # Reusable UI components
├── constants/      # Static configuration and constants
├── hooks/          # Custom React hooks
├── lib/            # Utilities (auth, database client, helpers)
├── prisma/         # Prisma schema and migrations
├── public/         # Static assets
├── styles/         # Global styles
└── middleware.ts   # Auth / route protection
```

## Getting Started

### Prerequisites

- Node.js 18.18+ (20+ recommended)
- npm or pnpm
- A database supported by Prisma (e.g. PostgreSQL, MySQL, SQLite)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/bensdz/Covercraft.git
cd Covercraft

# 2. Install dependencies
npm install
# or
pnpm install
```

### Environment variables

Create a `.env` file in the project root:

```env
# Database connection string used by Prisma
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/covercraft"

# Secret used to sign auth tokens (use a long random string)
JWT_SECRET="change-me"
```

> ✏️ Check the code in `lib/` and `middleware.ts` for the exact variable names and add any others (e.g. API keys) your setup needs.

### Database setup

```bash
npx prisma generate
npx prisma migrate dev
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase |

## Deployment

The app is deployed on [Vercel](https://vercel.com/). To deploy your own instance:

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Add the environment variables from above in the project settings.
4. Deploy. Make sure your production database is reachable and migrations are applied (`npx prisma migrate deploy`).

## Contributing

Issues and pull requests are welcome. Please open an issue first to discuss larger changes.

## License

Add a license of your choice (e.g. MIT) and reference it here.

## Author

Built by [@bensdz](https://github.com/bensdz).
