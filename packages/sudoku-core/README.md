# @sudoku/core

Platform-agnostic Sudoku game logic package.

## Philosophy

This package contains **pure TypeScript** with no framework dependencies (no React, no Next.js). This allows the same logic to be used in:

- Next.js web app
- React Native mobile app
- Node.js CLI tools
- Any future platform

## Key Principles

1. **Immutability**: All functions return NEW data structures instead of modifying existing ones
2. **Pure Functions**: Same input always produces same output, no side effects
3. **Type Safety**: Strict TypeScript for catching errors at compile time
4. **Testability**: Pure functions are easy to test

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Run tests
pnpm test

# Watch mode
pnpm test:watch
```

## Usage

```typescript
import { createEmptyBoard, setCell, isValidMove } from '@sudoku/core'

// Create new board
const board = createEmptyBoard()

// Make a move (returns NEW board, doesn't modify original)
const newBoard = setCell(board, 0, 0, 5)

// Validate move
if (isValidMove(board, 0, 0, 5)) {
  // Move is legal
}
```
