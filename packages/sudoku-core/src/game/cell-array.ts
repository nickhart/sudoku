import { Cell, SudokuArray, SudokuValue } from '../types'
import { createCell } from '../types/cell'
import { coordsToIndex, indexToCoords } from '../types/sudoku-array'

/**
 * Game board as a flat array of 81 cells
 *
 * LEARNING NOTE: Why 1D array?
 * - Better cache locality (performance)
 * - Easy serialization
 * - Simple iteration with array methods
 * - Helpers make it just as readable as 2D
 */
export type CellArray = readonly [
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
  Cell,
]

/**
 * Creates a CellArray from a SudokuArray
 *
 * LEARNING NOTE: Conversion between data formats
 * - SudokuArray = compact puzzle data (81 numbers)
 * - CellArray = rich game state (81 Cell objects with metadata)
 *
 * TODO: Implement this conversion
 * HINT: Use Array.from with map, convert each value to a Cell
 * HINT: Use indexToCoords to get row/col from index
 *
 * @param arr - The source SudokuArray
 * @param markAsGiven - If true, non-zero cells are marked as given
 * @returns A new CellArray
 */
export function createCellArrayFromSudokuArray(
  arr: SudokuArray,
  markAsGiven: boolean = true
): CellArray {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: createCellArrayFromSudokuArray')
}

/**
 * Creates an empty CellArray (all cells value = 0)
 *
 * TODO: Implement this factory
 * HINT: Create 81 cells using Array.from and createCell
 *
 * @returns A new empty CellArray
 */
export function createEmptyCellArray(): CellArray {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: createEmptyCellArray')
}

/**
 * Gets a cell at specific row/column
 *
 * TODO: Implement this accessor
 * HINT: Use coordsToIndex to convert row/col to array index
 *
 * @param cells - The CellArray
 * @param row - Row index (0-8)
 * @param col - Column index (0-8)
 * @returns The cell at that position
 */
export function getCellAt(cells: CellArray, row: number, col: number): Cell {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getCellAt')
}

/**
 * Updates a cell at specific row/column (immutably)
 *
 * LEARNING NOTE: Immutable array update
 * - Don't modify the array
 * - Create a NEW array with one element changed
 * - Use map() or spread operator
 *
 * TODO: Implement this updater
 * HINT: Use map with index, replace the cell at the target index
 *
 * @param cells - The CellArray
 * @param row - Row index (0-8)
 * @param col - Column index (0-8)
 * @param updatedCell - The new cell
 * @returns A NEW CellArray with the cell updated
 */
export function updateCellAt(
  cells: CellArray,
  row: number,
  col: number,
  updatedCell: Cell
): CellArray {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: updateCellAt')
}

/**
 * Gets all cells in a specific row
 *
 * TODO: Implement this filter
 * HINT: Use Array.filter(cell => cell.row === row)
 *
 * @param cells - The CellArray
 * @param row - Row index (0-8)
 * @returns Array of cells in that row (length 9)
 */
export function getCellsInRow(cells: CellArray, row: number): Cell[] {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getCellsInRow')
}

/**
 * Gets all cells in a specific column
 *
 * TODO: Implement this filter
 * HINT: Use Array.filter(cell => cell.col === col)
 *
 * @param cells - The CellArray
 * @param col - Column index (0-8)
 * @returns Array of cells in that column (length 9)
 */
export function getCellsInColumn(cells: CellArray, col: number): Cell[] {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getCellsInColumn')
}

/**
 * Gets all cells in a specific 3x3 box
 *
 * TODO: Implement this filter
 * HINT: Use Array.filter(cell => cell.box === box)
 *
 * @param cells - The CellArray
 * @param box - Box index (0-8)
 * @returns Array of cells in that box (length 9)
 */
export function getCellsInBox(cells: CellArray, box: number): Cell[] {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getCellsInBox')
}

/**
 * Gets all cells that share a row, column, or box with the target cell
 *
 * LEARNING NOTE: Sudoku peer cells
 * - These are the cells that constrain the target cell
 * - Used for validation and hint generation
 *
 * TODO: Implement this filter
 * HINT: Filter cells where row/col/box matches target (exclude the cell itself)
 *
 * @param cells - The CellArray
 * @param targetCell - The cell to find peers for
 * @returns Array of peer cells (length ~20)
 */
export function getPeerCells(cells: CellArray, targetCell: Cell): Cell[] {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getPeerCells')
}

/**
 * Converts CellArray back to SudokuArray
 *
 * TODO: Implement this conversion
 * HINT: Map each cell to its value
 *
 * @param cells - The CellArray
 * @returns A SudokuArray with just the values
 */
export function cellArrayToSudokuArray(cells: CellArray): SudokuArray {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: cellArrayToSudokuArray')
}

/**
 * Checks if all cells are filled (no zeros)
 *
 * TODO: Implement this check
 * HINT: Use Array.every(cell => cell.value !== 0)
 *
 * @param cells - The CellArray to check
 * @returns True if completely filled
 */
export function isCellArrayFilled(cells: CellArray): boolean {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: isCellArrayFilled')
}

/**
 * Counts how many cells are filled (non-zero)
 *
 * TODO: Implement this counter
 * HINT: Use Array.filter(cell => cell.value !== 0).length
 *
 * @param cells - The CellArray to check
 * @returns Number of filled cells (0-81)
 */
export function getFilledCount(cells: CellArray): number {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getFilledCount')
}
