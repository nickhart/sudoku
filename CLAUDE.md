# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a cross-platform Sudoku application built with:

- **Next.js 14+** for web interface (App Router)
- **React Native** for mobile apps (future - iOS/Android)

The codebase uses a monorepo structure with pnpm workspaces, sharing game logic between platforms while maintaining platform-specific UI implementations.

**Learning Focus**: This project prioritizes Next.js and TypeScript best practices for educational purposes.

## Development Commands

```bash
# Install dependencies
pnpm install

# Install core package dependencies
cd packages/sudoku-core && pnpm install

# Run Next.js dev server
pnpm dev

# Build all packages
pnpm build

# Run all tests
pnpm test

# Run core package tests
cd packages/sudoku-core && pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

## Project Structure

```
sudoku/
├── packages/
│   └── sudoku-core/          # Platform-agnostic game logic
│       ├── src/
│       │   ├── types/        # TypeScript type definitions
│       │   ├── game/         # Core game functions (board, validator, solver, generator)
│       │   ├── storage/      # Storage adapter interface
│       │   └── index.ts      # Public API
│       └── __tests__/        # Unit tests
│
├── src/                      # Next.js application
│   ├── app/                  # App Router pages
│   ├── components/           # React components (Board, Cell, GameControls, ErrorBoundary)
│   └── lib/
│       ├── adapters/         # Platform-specific implementations (web-storage)
│       └── contexts/         # React Context (GameContext)
│
├── pnpm-workspace.yaml       # Monorepo configuration
└── tsconfig.json             # TypeScript configuration
```

## Architecture

### Monorepo Pattern

- **`packages/sudoku-core/`**: Pure TypeScript package with NO framework dependencies
  - Contains all game logic, types, and algorithms
  - Can be used by Next.js, React Native, Node.js CLI, etc.
  - Fully tested with Jest
  - Strict TypeScript configuration

- **Root (`src/`)**: Next.js web application
  - Imports `@sudoku/core` for game logic
  - Contains React components and UI
  - Uses Web Storage API (localStorage) via adapter pattern

### Key Patterns

1. **Immutability**: All game functions return NEW data structures
2. **Pure Functions**: No side effects, easy to test
3. **Adapter Pattern**: Platform-agnostic storage interface
4. **Context + Reducer**: React state management (similar to Redux)
5. **Error Boundaries**: Graceful error handling in React

### Core Package API

```typescript
import {
  // Types
  Board,
  Cell,
  CellValue,
  Puzzle,
  GameState,
  GameAction,
  Difficulty,
  ValidationResult,

  // Board operations (immutable)
  createEmptyBoard,
  setCell,
  getCell,
  clearCell,
  getRow,
  getColumn,
  getBox,

  // Validation
  isValidMove,
  validateMove,
  isBoardValid,
  isBoardSolved,

  // Solver
  solveSudoku,
  getHint,

  // Generator
  generatePuzzle,

  // Storage
  StorageAdapter,
  STORAGE_KEYS,
} from '@sudoku/core'
```

### Implementation Status

✅ **Completed** (Phase 1 & 2):

**Infrastructure:**

- Monorepo structure with pnpm workspaces
- Core package with comprehensive type system
- Next.js app with TypeScript and Tailwind CSS v3
- shadcn/ui integration for UI components
- Quality gates: format, type-check, test, build
- CONTRIBUTING.md with development workflow

**Type System:**

- `SudokuArray` - Compact 0-9 format (81-element tuple)
- `CellArray` - 1D array of Cell objects with metadata
- `Cell` - Interface with row/col/box position + game state
- `Notes` - Tri-state system (-1=excluded, 0=unmarked, 1=included)
- `Board` - 2D array representation (legacy, may refactor)
- Standardized on 0 for empty cells (not null)

**UI Pages:**

- Main menu with navigation
- Game page with Board and GameControls
- Settings page with comprehensive options
- About page with rules and help

**Core Package Stubs:**

- `game/board.ts` - Board operations (partial implementation)
- `game/cell-array.ts` - 1D array helpers (stubs)
- `game/notes.ts` - Tri-state notes system (stubs)
- `game/validator.ts` - Validation logic (stubs)
- `game/solver.ts` - Backtracking solver (stubs)
- `game/generator.ts` - Puzzle generator (stubs)

**Contexts:**

- `SettingsContext` - Global app settings with localStorage
- `GameContext` - Game state management (skeleton)

⏳ **To Implement**:

- Core game function implementations
- GameContext reducer logic
- UI component event handlers
- Game persistence with localStorage
- Timer functionality
- Undo/Redo
- Actual puzzle generation algorithm
- Mobile-responsive design improvements

## Development Guidelines

### TypeScript

- **Strict mode enabled**: All optional type checks are on
- Use explicit types, avoid `any`
- Leverage type inference where clear
- Use discriminated unions for actions

### React

- **Server Components by default**: Use `'use client'` only when needed
- **Immutable state**: Never mutate state directly
- **Pure components**: Minimize side effects
- **Custom hooks**: Encapsulate reusable logic

### Testing

- Write tests for core package functions
- Use Test-Driven Development (TDD) when possible
- Focus on pure function testing (easy wins)

### Code Style

- Use Prettier for formatting (automatic)
- Follow ESLint rules
- Add educational comments for learning
- Use TODO comments for incomplete implementations

## Common Tasks

### Adding a new core function

1. Add type definitions to `packages/sudoku-core/src/types/`
2. Implement function in appropriate `game/` file
3. Export from `packages/sudoku-core/src/index.ts`
4. Add tests in `__tests__/`
5. Use in Next.js app via `@sudoku/core` import

### Adding a new React component

1. Create in `src/components/`
2. Use `'use client'` if needs interactivity
3. Import types from `@sudoku/core`
4. Use Tailwind CSS for styling
5. Add to appropriate page in `src/app/`

### Debugging

- Check browser console for errors
- Use React DevTools
- Check Next.js terminal output
- Use TypeScript errors as guidance
