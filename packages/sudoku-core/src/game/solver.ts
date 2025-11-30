import { Board, CellValue } from '../types'
import { getCell, setCell } from './board'
import { isValidMove } from './validator'

/**
 * Solves a Sudoku puzzle using backtracking algorithm
 *
 * LEARNING NOTE: Backtracking algorithm
 * This is a classic recursive algorithm:
 * 1. Find an empty cell
 * 2. Try numbers 1-9 in that cell
 * 3. For each number, if it's valid:
 *    - Place it
 *    - Recursively solve the rest of the board
 *    - If that leads to solution, done!
 *    - If not, backtrack (remove the number and try next)
 * 4. If no number works, return false (this path is impossible)
 *
 * This is a depth-first search (DFS) through the solution space.
 *
 * CHALLENGE: This is an advanced algorithm!
 * - Don't worry if it's hard at first
 * - Look up "Sudoku backtracking" for examples
 * - This is great practice for recursion
 *
 * TODO: Implement this function
 *
 * @param board - The puzzle to solve
 * @returns The solved board, or null if unsolvable
 */
export function solveSudoku(board: Board): Board | null {
  // TODO: YOUR IMPLEMENTATION HERE
  //
  // Suggested approach:
  // 1. Create a helper function that finds first empty cell
  // 2. If no empty cells, puzzle is solved! Return board
  // 3. Try each number 1-9:
  //    - If isValidMove, place it and recurse
  //    - If recursion succeeds, return that solution
  //    - If fails, try next number
  // 4. If all numbers fail, return null (backtrack)
  //
  // HINT: You'll need a recursive helper function
  // HINT: Remember to work immutably (create new boards with setCell)
  throw new Error('Not implemented: solveSudoku')
}

/**
 * Finds the first empty cell on the board
 *
 * LEARNING NOTE: Helper function for solver
 * - Separating concerns makes code testable
 * - This can be tested independently
 *
 * TODO: Implement this helper
 *
 * @param board - The board to search
 * @returns Position of first empty cell, or null if board is full
 */
export function findEmptyCell(
  board: Board
): { row: number; col: number } | null {
  // TODO: YOUR IMPLEMENTATION HERE
  // HINT: Use nested loops to find first cell with value === null
  throw new Error('Not implemented: findEmptyCell')
}

/**
 * Checks if a puzzle has a unique solution
 *
 * LEARNING NOTE: Valid Sudoku puzzles have exactly ONE solution
 * - Multiple solutions = bad puzzle
 * - No solution = impossible puzzle
 * - This is important for puzzle generation
 *
 * CHALLENGE: Advanced!
 * To check uniqueness:
 * 1. Solve the puzzle, get one solution
 * 2. Continue searching for another solution
 * 3. If you find two different solutions, it's not unique
 *
 * TODO: Implement this function (or leave for later)
 *
 * @param board - The puzzle to check
 * @returns True if puzzle has exactly one solution
 */
export function hasUniqueSolution(board: Board): boolean {
  // TODO: YOUR IMPLEMENTATION HERE (ADVANCED)
  // This is optional - you can implement this later when working on generator
  throw new Error('Not implemented: hasUniqueSolution')
}

/**
 * Counts the number of solutions for a puzzle
 *
 * LEARNING NOTE: Modified solver
 * - Instead of stopping at first solution, count all solutions
 * - Used to verify puzzle uniqueness
 *
 * TODO: Implement this function (ADVANCED - optional for now)
 *
 * @param board - The puzzle to check
 * @param limit - Stop counting after this many (optimization)
 * @returns Number of solutions (up to limit)
 */
export function countSolutions(board: Board, limit = 2): number {
  // TODO: YOUR IMPLEMENTATION HERE (ADVANCED)
  throw new Error('Not implemented: countSolutions')
}

/**
 * Gets a hint for the next move
 *
 * LEARNING NOTE: Hint strategies
 * Simple approach: Solve the puzzle, reveal one cell from solution
 * Advanced: Use logical techniques humans use (naked singles, hidden pairs, etc.)
 *
 * TODO: Implement this function
 * HINT: Solve the puzzle, find first empty cell in current board,
 *       return its value from the solution
 *
 * @param board - Current board state
 * @returns Position and value for a hint, or null if solved/unsolvable
 */
export function getHint(
  board: Board
): { row: number; col: number; value: CellValue } | null {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getHint')
}
