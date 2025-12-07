import { Notes } from '../game/notes'
import { SudokuValue } from './sudoku-array'

/**
 * Represents a single cell in a Sudoku game
 *
 * LEARNING NOTE: Cell as game state
 * - Contains position metadata (row, col, box) - readonly, never changes
 * - Contains value and game state (isGiven, isValid, notes)
 * - Immutable: updating a cell creates a NEW cell object
 *
 * Design decision: Store row/col/box in each cell
 * - Pro: Easy filtering (cells.filter(c => c.row === 5))
 * - Pro: No recalculation needed
 * - Pro: Clearer code (cell.row vs calculating from index)
 * - Con: Small memory overhead (acceptable for 81 cells)
 */
export interface Cell {
  /**
   * Row index (0-8)
   * Readonly because a cell's position never changes
   */
  readonly row: number

  /**
   * Column index (0-8)
   * Readonly because a cell's position never changes
   */
  readonly col: number

  /**
   * Box/square index (0-8)
   * Readonly because a cell's position never changes
   *
   * Box layout:
   *   0 1 2
   *   3 4 5
   *   6 7 8
   */
  readonly box: number

  /**
   * Current value in the cell (0-9)
   * 0 = empty, 1-9 = filled
   */
  // TODO: would using a number here be an optimization? this SudokuValue type is great for clarity, but maybe overkill?
  value: SudokuValue

  /**
   * Whether this cell was part of the original puzzle
   * Given cells cannot be modified by the player
   */
  isGiven: boolean

  /**
   * Whether the current value is valid (no conflicts)
   * Updated by validation logic
   */
  isValid: boolean

  /**
   * Pencil marks / candidate numbers
   * Array of possible values user is considering (1-9)
   */
  notes: Notes
}

/**
 * Creates a new Cell at given position
 *
 * LEARNING NOTE: Factory pattern with position
 * - Position (row/col/box) is set once and never changes
 * - Value and other properties can be updated later
 *
 * TODO: Implement this factory
 * HINT: Calculate box using Math.floor(row / 3) * 3 + Math.floor(col / 3)
 *
 * @param row - Row index (0-8)
 * @param col - Column index (0-8)
 * @param value - Initial value (default 0 = empty)
 * @param isGiven - Whether this is a puzzle clue (default false)
 * @returns A new Cell object
 */
export function createCell(
  row: number,
  col: number,
  value: SudokuValue = 0,
  isGiven: boolean = false
): Cell {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: createCell')
}

/**
 * Updates a cell's value (immutably)
 *
 * LEARNING NOTE: Immutable update pattern
 * - Does NOT modify the original cell
 * - Returns a NEW cell with updated value
 * - Other properties (position, isGiven) remain the same
 *
 * TODO: Implement this updater
 * HINT: Use spread operator { ...cell, value }
 *
 * @param cell - The cell to update
 * @param value - New value
 * @returns A NEW cell with updated value
 */
export function setCellValue(cell: Cell, value: SudokuValue): Cell {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: setCellValue')
}

/**
 * Clears a cell (sets value to 0)
 *
 * TODO: Implement this updater
 * HINT: Use setCellValue with value = 0
 *
 * @param cell - The cell to clear
 * @returns A NEW cell with value = 0
 */
export function clearCell(cell: Cell): Cell {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: clearCell')
}

/**
 * Toggles a note/pencil mark (immutably)
 *
 * LEARNING NOTE: Array toggle pattern
 * - If note exists: remove it (filter)
 * - If note doesn't exist: add it (spread)
 *
 * TODO: Implement this updater
 * HINT: Check if notes.includes(note), then filter or spread
 *
 * @param cell - The cell to update
 * @param note - The number to toggle (1-9)
 * @returns A NEW cell with updated notes
 */
export function toggleCellNote(cell: Cell, note: number): Cell {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: toggleCellNote')
}

/**
 * Checks if two cells are in the same row
 *
 * TODO: Implement this helper
 *
 * @param cell1 - First cell
 * @param cell2 - Second cell
 * @returns True if same row
 */
export function inSameRow(cell1: Cell, cell2: Cell): boolean {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: inSameRow')
}

/**
 * Checks if two cells are in the same column
 *
 * TODO: Implement this helper
 *
 * @param cell1 - First cell
 * @param cell2 - Second cell
 * @returns True if same column
 */
export function inSameColumn(cell1: Cell, cell2: Cell): boolean {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: inSameColumn')
}

/**
 * Checks if two cells are in the same 3x3 box
 *
 * TODO: Implement this helper
 *
 * @param cell1 - First cell
 * @param cell2 - Second cell
 * @returns True if same box
 */
export function inSameBox(cell1: Cell, cell2: Cell): boolean {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: inSameBox')
}

/**
 * Checks if two cells conflict (same row/col/box and same non-zero value)
 *
 * TODO: Implement this helper
 * HINT: Check if same row/col/box AND both have same non-zero value
 *
 * @param cell1 - First cell
 * @param cell2 - Second cell
 * @returns True if cells conflict
 */
export function cellsConflict(cell1: Cell, cell2: Cell): boolean {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: cellsConflict')
}
