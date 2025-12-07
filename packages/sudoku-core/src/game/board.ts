import { Board, Cell, CellValue } from '../types'
import { createEmptyNotes } from './notes'

/**
 * Creates an empty Sudoku board (9x9 grid of empty cells)
 *
 * - Returns a fresh board every time (no shared state)
 * - All cells start empty (value: 0)
 * - All cells are editable (isGiven: false)
 *
 * @returns A new 9x9 board filled with empty cells
 */
export function createEmptyBoard(): Board {
  return Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => createEmptyCell())
  )
}

/**
 * Creates a single empty cell
 *
 * @returns A new empty cell
 */
export function createEmptyCell(): Cell {
  return { value: 0, isGiven: false, isValid: true, notes: createEmptyNotes() }
}

/**
 * Creates a cell with a specific value
 *
 * @param value - The number to place (0-9, where 0 = empty)
 * @param isGiven - Whether this is part of the original puzzle
 * @returns A new cell with the specified value
 */
export function createCell(value: CellValue, isGiven = false): Cell {
  return { value, isGiven, isValid: true, notes: createEmptyNotes() }
}

/**
 * Updates a single cell on the board (IMMUTABLY)
 *
 * LEARNING NOTE: Immutable update pattern
 * - Does NOT modify the original board
 * - Creates a NEW board with one cell changed
 * - This is crucial for React's state management
 *
 * Pattern:
 * 1. Copy all rows before target row
 * 2. Copy target row, but replace target cell
 * 3. Copy all rows after target row
 *
 * @param board - The current board
 * @param row - Row index (0-8)
 * @param col - Column index (0-8)
 * @param value - New value for the cell
 * @returns A NEW board with the cell updated
 */
export function setCell(
  board: Board,
  row: number,
  col: number,
  value: CellValue
): Board {
  return board.map((rowArray, r) =>
    r === row
      ? rowArray.map((cell, c) => (c === col ? { ...cell, value } : cell))
      : rowArray
  )
}

/**
 * Gets a cell value at specific coordinates
 *
 * Safe array access
 * - Check bounds to prevent undefined errors
 * - TypeScript's noUncheckedIndexedAccess will return undefined if indexing out of bounds
 *
 * @param board - The board to read from
 * @param row - Row index (0-8)
 * @param col - Column index (0-8)
 * @returns The cell value, or 0 if out of bounds
 */
export function getCell(board: Board, row: number, col: number): CellValue {
  return board[row]?.[col]?.value ?? 0
}

/**
 * Clears a cell (sets value to 0) - IMMUTABLY
 *
 * @param board - The current board
 * @param row - Row index (0-8)
 * @param col - Column index (0-8)
 * @returns A NEW board with the cell cleared
 */
export function clearCell(board: Board, row: number, col: number): Board {
  return setCell(board, row, col, 0)
}

/**
 * Toggles a note (pencil mark) for a cell - IMMUTABLY
 *
 * - If note exists: filter it out
 * - If note doesn't exist: add it with spread operator
 *
 * HINT: Use Array.includes() to check if note exists
 * HINT: Use Array.filter() to remove, or [...notes, note] to add
 *
 * @param board - The current board
 * @param row - Row index (0-8)
 * @param col - Column index (0-8)
 * @param note - The number to toggle (1-9)
 * @returns A NEW board with the note toggled
 */
export function toggleNote(
  board: Board,
  row: number,
  col: number,
  note: number
): Board {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: toggleNote')
}

/**
 * Gets all cells in a row
 *
 * TODO: Implement this function
 * HINT: Simply return board[row]
 *
 * @param board - The board
 * @param row - Row index (0-8)
 * @returns Array of cells in that row
 */
export function getRow(board: Board, row: number): ReadonlyArray<Cell> {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getRow')
}

/**
 * Gets all cells in a column
 *
 * TODO: Implement this function
 * HINT: Use map to extract column from each row: board.map(row => row[col])
 *
 * @param board - The board
 * @param col - Column index (0-8)
 * @returns Array of cells in that column
 */
export function getColumn(board: Board, col: number): ReadonlyArray<Cell> {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getColumn')
}

/**
 * Gets all cells in a 3x3 box
 *
 * LEARNING NOTE: Box calculation
 * - Sudoku has 9 boxes (3x3 sections)
 * - Box 0-2 are top row, 3-5 middle row, 6-8 bottom row
 * - To find box from (row, col): box = Math.floor(row/3)*3 + Math.floor(col/3)
 * - To find cells in box: startRow = Math.floor(boxIndex/3)*3, etc.
 *
 * TODO: Implement this function
 * HINT: Calculate starting row/col for the box, then extract 3x3 cells
 *
 * @param board - The board
 * @param boxIndex - Box index (0-8)
 * @returns Array of 9 cells in that box
 */
export function getBox(board: Board, boxIndex: number): ReadonlyArray<Cell> {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getBox')
}

/**
 * Gets the box index for a given cell position
 *
 * @param row - Row index (0-8)
 * @param col - Column index (0-8)
 * @returns Box index (0-8)
 */
export function getBoxIndex(row: number, col: number): number {
  // TODO: YOUR IMPLEMENTATION HERE
  // HINT: Math.floor(row / 3) * 3 + Math.floor(col / 3)
  throw new Error('Not implemented: getBoxIndex')
}

/**
 * Checks if the board is completely filled (no zeros)
 *
 * TODO: Implement this function
 * HINT: Use board.every() with nested check
 *
 * @param board - The board to check
 * @returns True if all cells have values (1-9)
 */
export function isBoardFilled(board: Board): boolean {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: isBoardFilled')
}

/**
 * Counts how many cells are filled
 *
 * TODO: Implement this function
 * HINT: Use reduce() or nested loops to count non-zero cells
 *
 * @param board - The board to check
 * @returns Number of filled cells (0-81)
 */
export function getFilledCellCount(board: Board): number {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getFilledCellCount')
}
