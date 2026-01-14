# Taskly

A modern task management application built with React, TypeScript, and TailwindCSS.

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **Build Tool:** Vite
- **Component Development:** Storybook
- **Testing:** Cypress
- **Routing:** React Router
- **State/Data:** TanStack Query, TanStack Form
- **API Client:** openapi-fetch (type-safe, auto-generated from OpenAPI spec)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- [taskly-service](https://github.com/KARSE22/taskly-service) running on `http://localhost:3000`

### Installation

```bash
npm install
```

### Development

```bash
# Make sure taskly-service is running first, then:
npm run dev
```

This will auto-generate API types from the backend's OpenAPI spec before starting the dev server.

## API Type Generation

Types are auto-generated from the backend's OpenAPI spec at `/openapi.json`.

```bash
# Manual generation (runs automatically with npm run dev)
npm run generate:api
```

Usage:

```typescript
import { api } from '@/lib/api';

// Fully typed requests and responses
const { data, error } = await api.GET('/tasks');

const { data } = await api.POST('/tasks', {
  body: { title: 'New task' },
});
```

## Scripts

| Command                   | Description                           |
| ------------------------- | ------------------------------------- |
| `npm run dev`             | Generate API types + start dev server |
| `npm run build`           | Build for production                  |
| `npm run preview`         | Preview production build              |
| `npm run lint`            | Run ESLint                            |
| `npm run lint:fix`        | Fix ESLint errors                     |
| `npm run format`          | Format code with Prettier             |
| `npm run format:check`    | Check code formatting                 |
| `npm run generate:api`    | Generate API types from backend       |
| `npm run test`            | Run all Cypress tests                 |
| `npm run test:open`       | Open Cypress test runner              |
| `npm run test:e2e`        | Run e2e tests only                    |
| `npm run test:component`  | Run component tests only              |
| `npm run storybook`       | Start Storybook                       |
| `npm run build-storybook` | Build Storybook                       |

## Project Structure

```
src/
├── assets/          # Images, icons, SVGs
├── components/      # Reusable UI components
│   └── ui/          # Base UI components
├── hooks/           # Custom React hooks
├── lib/             # API client, utilities
├── pages/           # Page components
├── styles/          # Global styles
├── types/           # TypeScript types (including auto-generated API types)
└── utils/           # Helper functions
```

## Code Quality

This project uses:

- **ESLint** with strict TypeScript rules
- **Prettier** for code formatting (with Tailwind class sorting)
- **Husky** + **lint-staged** for pre-commit hooks

Pre-commit hooks automatically:

- Lint and fix TypeScript/React files
- Format all staged files

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure `npm run lint` and `npm run build` pass
4. Submit a pull request
