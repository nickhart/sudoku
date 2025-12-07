import { Difficulty } from './difficulty'
import { SudokuValue } from './sudoku-array'

/**
 * Represents a single cell value in Sudoku
 *
 * LEARNING NOTE: Why union types?
 * - 0 represents an empty cell (not filled by puzzle or user)
 * - 1-9 are the only valid Sudoku numbers
 * - TypeScript will enforce this at compile time
 * - This is an alias of SudokuValue for consistency
 */
export type CellValue = SudokuValue

/**
 * A single cell in the Sudoku board
 *
 * LEARNING NOTE: Immutable data structure
 * - Each cell is an independent object
 * - 'readonly' keyword prevents accidental mutation
 * - When updating, we create a NEW cell object instead of modifying
 *
 * Fields explained:
 * - value: Current number in the cell (0 if empty, 1-9 if filled)
 * - isGiven: True if this was part of the original puzzle (can't be changed by user)
 * - isValid: True if the current value doesn't violate Sudoku rules
 * - notes: Array of possible numbers user is considering (pencil marks)
 */
export type Cell = {
  readonly value: CellValue
  readonly isGiven: boolean
  readonly isValid: boolean
  readonly notes: ReadonlyArray<number>
}

/**
 * A Sudoku board is a 9x9 grid of cells
 *
 * LEARNING NOTE: Why 2D array?
 * - board[row][col] is intuitive for humans
 * - Alternative: Could use 1D array of 81 cells (more memory efficient)
 * - Alternative: Could use Map with "row,col" keys (easier for sparse data)
 * - We choose 2D for clarity and ease of learning
 *
 * IMMUTABILITY: This is a read-only nested array
 * - To update, create a NEW board with one cell changed
 * - See setCell() function for the pattern
 */
export type Board = ReadonlyArray<ReadonlyArray<Cell>>

/**
 * Represents a complete Sudoku puzzle
 *
 * LEARNING NOTE: Separation of concerns
 * - puzzle: The original puzzle (with clues)
 * - solution: The complete solved board
 * - This allows us to check answers and provide hints
 */
export type Puzzle = {
  readonly puzzle: Board
  readonly solution: Board
  readonly difficulty: Difficulty
  readonly createdAt: Date
}

/**
 * Game state for a player's session
 *
 * LEARNING NOTE: This is what goes in React state/context
 * - currentBoard: Player's progress (includes their inputs)
 * - originalPuzzle: The starting point (never changes during game)
 * - startTime: For tracking solve time
 * - completed: Whether all cells are correctly filled
 * - moves: Number of cells filled (for statistics)
 *
 * IMMUTABILITY: Every move creates a NEW GameState object
 */
export type GameState = {
  readonly currentBoard: Board
  readonly originalPuzzle: Puzzle
  readonly startTime: Date
  readonly completed: boolean
  readonly moves: number
  readonly hintsUsed: number
}

/**
 * Actions that can modify game state
 *
 * LEARNING NOTE: Discriminated unions for type-safe reducers
 * - Each action has a 'type' property (the discriminant)
 * - TypeScript can narrow the type based on 'type' value
 * - This pattern is used in Redux and useReducer
 *
 * Example:
 *   if (action.type === 'SET_CELL') {
 *     // TypeScript knows action.row, action.col, action.value exist here
 *   }
 */
export type GameAction =
  | { type: 'SET_CELL'; row: number; col: number; value: CellValue }
  | { type: 'TOGGLE_NOTE'; row: number; col: number; note: number }
  | { type: 'CLEAR_CELL'; row: number; col: number }
  | { type: 'NEW_GAME'; puzzle: Puzzle }
  | { type: 'REQUEST_HINT' }
  | { type: 'RESET_GAME' }
  | { type: 'CHECK_SOLUTION' }

/**
 * Result of validating a move
 *
 * LEARNING NOTE: Explicit result types
 * - Instead of throwing errors, return success/failure explicitly
 * - Makes error handling predictable and testable
 * - Pattern: Result<T> or Either<Error, Success>
 */
export type ValidationResult = {
  readonly isValid: boolean
  readonly conflicts?: ReadonlyArray<{ row: number; col: number }>
  readonly reason?: string
}
