# Sudoku Learning Project

A Next.js and React Native Sudoku app built with best practices for learning.

## 🎯 Project Goals

This is an educational project focusing on:

- **Next.js 14+ App Router** patterns
- **TypeScript** strict mode and type safety
- **Monorepo architecture** with pnpm workspaces
- **Clean code** patterns (immutability, pure functions)
- **Platform-agnostic** design (prepare for React Native)

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Install core package dependencies
cd packages/sudoku-core && pnpm install && cd ../..

# Start development server
pnpm -w dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
sudoku/
├── packages/
│   └── sudoku-core/          # Platform-agnostic game logic
│       ├── src/
│       │   ├── types/        # TypeScript types
│       │   ├── game/         # Core functions (TODO: implement)
│       │   └── storage/      # Storage adapter interface
│       └── __tests__/        # Unit tests
│
└── src/                      # Next.js web app
    ├── app/                  # Pages (App Router)
    ├── components/           # React components
    └── lib/
        ├── adapters/         # Web storage implementation
        └── contexts/         # Game state context
```

## ✅ Phase 1 Complete

- [x] Monorepo setup with pnpm workspaces
- [x] Core package with comprehensive types and skeleton functions
- [x] Next.js app with TypeScript and Tailwind CSS
- [x] React Context with reducer pattern
- [x] Error Boundary component
- [x] Skeleton UI components (Board, Cell, GameControls)
- [x] Web storage adapter
- [x] ESLint and Prettier configuration

## 🎓 Learning Path

### Next: Implement Core Game Logic

Start in `packages/sudoku-core/src/game/` and implement:

1. **board.ts** - Basic board operations (easiest)
   - `createEmptyBoard()`, `setCell()`, `getCell()`
   - Focus on immutable patterns

2. **validator.ts** - Validation logic
   - `isValidMove()`, `isBoardValid()`
   - Learn Sudoku rules programmatically

3. **solver.ts** - Backtracking algorithm (challenging!)
   - `solveSudoku()` - Recursive solving
   - Great practice for algorithms

4. **generator.ts** - Puzzle generation (advanced)
   - `generatePuzzle()` - Creates valid puzzles
   - Combines solver with randomization

Each file has extensive TODO comments and hints!

### Then: Connect UI to Logic

1. Implement `GameContext` reducer in `src/lib/contexts/GameContext.tsx`
2. Add event handlers in UI components
3. Test the game in browser!

## 📚 Resources

- See `CLAUDE.md` for detailed architecture docs
- Check `packages/sudoku-core/README.md` for core package info
- Read inline comments for learning notes

## 🛠️ Commands

```bash
# Development
pnpm -w dev              # Start Next.js dev server
pnpm -w build            # Build all packages
pnpm -w test             # Run all tests
pnpm -w lint             # Lint code
pnpm -w format           # Format with Prettier

# Core package only
cd packages/sudoku-core
pnpm test                # Run core tests
pnpm build               # Build core package
```

## 🎮 Future Features

- Settings/Debug page
- Timer functionality
- Undo/Redo
- Keyboard navigation
- Hints system
- Save/Load games
- Statistics tracking
- React Native mobile app
