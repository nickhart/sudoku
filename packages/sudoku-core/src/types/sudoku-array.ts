/**
 * SudokuArray - Raw puzzle data format
 *
 * - Standard puzzle format: 81 integers (0-9)
 * - 0 represents empty cell
 * - 1-9 represent filled cells
 * - Easy to serialize/deserialize (JSON, localStorage)
 * - Compact representation before adding game metadata
 * - Typescript enforces values, but turns into number at compile time.
 */

/**
 * A single value in a SudokuArray
 * 0 = empty, 1-9 = filled
 */
export type SudokuValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/**
 * A Sudoku puzzle as a flat array of 81 integers
 *
 * - This enforces exactly 81 elements at compile time
 * - TypeScript will error if you try to create shorter/longer arrays
 * - More type-safe than `number[]` or `SudokuValue[]`
 */
export type SudokuArray = readonly [
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
  SudokuValue,
]

/**
 * Type guard to validate if an array is a valid SudokuArray
 *
 * TODO: Implement this validation
 * HINT: Check length === 81 and all values are 0-9
 *
 * @param arr - Array to validate
 * @returns True if valid SudokuArray
 */
export function isValidSudokuArray(arr: unknown): arr is SudokuArray {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: isValidSudokuArray')
}

/**
 * Converts 1D index to row/column coordinates
 *
 * LEARNING NOTE: Index conversion math
 * - Index 0-80 maps to positions on 9x9 grid
 * - row = Math.floor(index / 9)
 * - col = index % 9
 *
 * TODO: Implement this conversion
 *
 * @param index - Index in SudokuArray (0-80)
 * @returns {row, col} coordinates (each 0-8)
 */
export function indexToCoords(index: number): { row: number; col: number } {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: indexToCoords')
}

/**
 * Converts row/column coordinates to 1D index
 *
 * LEARNING NOTE: Inverse of indexToCoords
 * - index = row * 9 + col
 *
 * TODO: Implement this conversion
 *
 * @param row - Row index (0-8)
 * @param col - Column index (0-8)
 * @returns Index in SudokuArray (0-80)
 */
export function coordsToIndex(row: number, col: number): number {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: coordsToIndex')
}

/**
 * Gets the 3x3 box index for given row/column
 *
 * LEARNING NOTE: Box calculation
 * - Sudoku has 9 boxes numbered 0-8
 * - Box layout:
 *   0 1 2
 *   3 4 5
 *   6 7 8
 * - Formula: Math.floor(row / 3) * 3 + Math.floor(col / 3)
 *
 * TODO: Implement this calculation
 *
 * @param row - Row index (0-8)
 * @param col - Column index (0-8)
 * @returns Box index (0-8)
 */
export function getBoxIndex(row: number, col: number): number {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getBoxIndex')
}

/**
 * Gets value at specific coordinates in SudokuArray
 *
 * TODO: Implement this accessor
 * HINT: Use coordsToIndex to get the index
 *
 * @param arr - The SudokuArray
 * @param row - Row index (0-8)
 * @param col - Column index (0-8)
 * @returns The value at that position
 */
export function getValue(
  arr: SudokuArray,
  row: number,
  col: number
): SudokuValue {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getValue')
}

/**
 * Creates an empty SudokuArray (all zeros)
 *
 * TODO: Implement this factory
 * HINT: Use Array.from or new Array(81).fill(0) with proper typing
 *
 * @returns A new SudokuArray with all zeros
 */
export function createEmptySudokuArray(): SudokuArray {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: createEmptySudokuArray')
}
