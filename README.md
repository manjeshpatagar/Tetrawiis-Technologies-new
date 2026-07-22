# Tetrawiis Technologies Website

Production-ready corporate website workspace with an accessible Next.js frontend and a setup-only NestJS backend foundation. No API controllers or business logic are included.

## Projects

- `ui` — Next.js 16 App Router, Tailwind CSS, TanStack Query, Zustand, React Hook Form and Zod.
- `api` — NestJS architecture, Prisma/PostgreSQL, Swagger bootstrap, validation, logging and security module foundations.

## Getting started

```bash
npm install --prefix ui
npm install --prefix api
cp ui/.env.example ui/.env.local
cp api/.env.example api/.env
npm run dev:ui
npm run dev:api
```

The UI runs on `http://localhost:3000`; the API foundation runs on `http://localhost:4000` and Swagger metadata is exposed at `/docs`. Start PostgreSQL with `docker compose up postgres -d` before Prisma workflows.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Architecture

Feature-specific UI components live in `ui/src/components`, API adapters in `ui/src/services`, global client state in `ui/src/store`, and route composition in `ui/src/app`. Backend feature modules are intentionally empty shells ready for controllers/services later; cross-cutting concerns are isolated under `api/src/common` and infrastructure under `api/src/config`, `api/src/database`, and `api/src/prisma`.
