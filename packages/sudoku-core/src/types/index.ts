/**
 * Public API for @sudoku/core types
 *
 * LEARNING NOTE: Barrel exports
 * - This file re-exports everything from individual type files
 * - Allows clean imports: import { Board, Cell } from '@sudoku/core'
 * - Instead of: import { Board } from '@sudoku/core/types/game'
 * - Makes refactoring easier (can move types between files)
 */

export * from './difficulty'
export * from './game'
