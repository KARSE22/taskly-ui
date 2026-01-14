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
- **HTTP Client:** Axios

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
# Start dev server
npm run dev

# Start Storybook
npm run storybook
```

## Scripts

| Command                   | Description               |
| ------------------------- | ------------------------- |
| `npm run dev`             | Start development server  |
| `npm run build`           | Build for production      |
| `npm run preview`         | Preview production build  |
| `npm run lint`            | Run ESLint                |
| `npm run lint:fix`        | Fix ESLint errors         |
| `npm run format`          | Format code with Prettier |
| `npm run format:check`    | Check code formatting     |
| `npm run test`            | Run all Cypress tests     |
| `npm run test:open`       | Open Cypress test runner  |
| `npm run test:e2e`        | Run e2e tests only        |
| `npm run test:component`  | Run component tests only  |
| `npm run storybook`       | Start Storybook           |
| `npm run build-storybook` | Build Storybook           |

## Project Structure

```
src/
├── assets/          # Images, icons, SVGs
├── components/      # Reusable UI components
│   └── ui/          # Base UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
├── styles/          # Global styles
├── types/           # TypeScript type definitions
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
