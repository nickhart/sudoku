# Contributing Guide

This document outlines the development workflow and quality standards for this project.

## Development Scripts

### Core Commands

```bash
# Development
pnpm dev              # Start Next.js dev server
pnpm test:watch       # Run tests in watch mode

# Building
pnpm build            # Build all packages (core + Next.js)

# Testing
pnpm test             # Run all tests
pnpm test:watch       # Run tests in watch mode

# Code Quality
pnpm lint             # Check for linting errors
pnpm lint:fix         # Auto-fix linting errors
pnpm format           # Format all code with Prettier
pnpm format:check     # Check if code is formatted
pnpm type-check       # Run TypeScript compiler checks

# All Quality Gates
pnpm validate         # Run ALL checks (use before committing!)
```

### Core Package Scripts

```bash
cd packages/sudoku-core

pnpm build            # Build TypeScript
pnpm test             # Run Jest tests
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Run tests with coverage report
pnpm type-check       # TypeScript type checking
```

## Quality Gates

The `pnpm validate` command runs these checks **in order**:

1. **Format Check** (`format:check`)
   - Verifies code follows Prettier formatting
   - Fails if any files need formatting
   - Fix with: `pnpm format`

2. **Lint** (`lint`)
   - Checks for ESLint violations
   - Enforces code quality rules
   - Fix with: `pnpm lint:fix`

3. **Type Check** (`type-check`)
   - Verifies TypeScript types
   - Checks both root and core package
   - No auto-fix - must correct manually

4. **Test** (`test`)
   - Runs all Jest tests
   - Currently in core package only
   - Must pass before committing

5. **Build** (`build`)
   - Compiles TypeScript in core package
   - Builds Next.js production bundle
   - Verifies no build errors

## Pre-Commit Checklist

Before committing code, ensure:

```bash
# Run all quality gates
pnpm validate
```

If all checks pass ✅, you're good to commit!

## Workflow

### Adding a New Feature

1. **Create a branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Write tests first (TDD)**

   ```bash
   cd packages/sudoku-core
   pnpm test:watch
   ```

3. **Implement the feature**
   - Write code to make tests pass
   - Follow TypeScript strict mode
   - Use pure functions where possible

4. **Format and lint**

   ```bash
   pnpm format
   pnpm lint:fix
   ```

5. **Validate everything**

   ```bash
   pnpm validate
   ```

6. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add your feature"
   git push origin feature/your-feature-name
   ```

### Fixing a Bug

1. **Write a failing test** that reproduces the bug
2. **Fix the code** to make the test pass
3. **Run validate** to ensure no regressions
4. **Commit** with descriptive message

## Code Standards

### TypeScript

- **Strict mode enabled** - all type checks are on
- Avoid `any` type - use proper types
- Use type inference where clear
- Explicit return types for public functions

### React

- **Server Components by default** - only use `'use client'` when needed
- **Immutable state** - never mutate state directly
- **Pure components** - minimize side effects
- Props should have explicit types

### Testing

- Write tests for all core package functions
- Use descriptive test names
- Follow AAA pattern: Arrange, Act, Assert
- Aim for high coverage on business logic

### Formatting

- Prettier handles all formatting
- 2 space indentation
- Single quotes
- No semicolons
- 80 character line width

### Commit Messages

Follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `refactor:` - Code refactoring
- `test:` - Add/update tests
- `chore:` - Maintenance

## Troubleshooting

### Tests failing?

```bash
# Check what's failing
pnpm test

# Run in watch mode to debug
pnpm test:watch
```

### Lint errors?

```bash
# Try auto-fix first
pnpm lint:fix

# If that doesn't work, fix manually
pnpm lint
```

### Type errors?

```bash
# Check all type errors
pnpm type-check

# Fix in your editor with TypeScript support
```

### Format issues?

```bash
# Auto-format everything
pnpm format

# Then check
pnpm format:check
```

## CI/CD

The `pnpm validate` command should be run in CI/CD pipelines to ensure code quality before merging.

```yaml
# Example GitHub Actions
- name: Validate
  run: pnpm validate
```

## Known Issues

### Lint Command

There's currently an issue with `next lint` and ESLint v9. The `validate` command temporarily excludes lint checks. You can still run:

- `pnpm format` - Auto-format code (this catches most issues)
- `pnpm type-check` - TypeScript validation

### TypeScript Errors in Stubs

The codebase contains many stub functions (marked with `TODO: YOUR IMPLEMENTATION HERE`). These will show TypeScript errors for unused parameters until implemented. This is expected and normal during development.

To fix these temporarily, prefix unused parameters with underscore:

```typescript
// Before
export function myFunc(param1: string, param2: number) {
  throw new Error('Not implemented')
}

// After
export function myFunc(_param1: string, _param2: number) {
  throw new Error('Not implemented')
}
```

## Questions?

Check the main [README.md](./README.md) and [CLAUDE.md](./CLAUDE.md) for project-specific guidance.
