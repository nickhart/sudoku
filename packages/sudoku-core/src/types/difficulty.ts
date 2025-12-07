/**
 * Sudoku difficulty levels
 *
 * LEARNING NOTE: Using an enum vs string union types
 * - Enums provide both type safety AND runtime values
 * - String unions are type-safe but disappear at runtime
 * - For this case, we use string union for simplicity and JSON serialization
 */
export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert'

/**
 * Configuration for each difficulty level
 *
 * LEARNING NOTE: This is a "lookup table" pattern
 * - Maps difficulty to number of clues (pre-filled cells)
 * - Easy: More clues = easier to solve
 * - Expert: Fewer clues = harder to solve
 * - Standard Sudoku has 81 total cells
 */
export const DIFFICULTY_CONFIG: Record<Difficulty, { clues: number }> = {
  easy: { clues: 45 }, // ~55% filled
  medium: { clues: 35 }, // ~43% filled
  hard: { clues: 28 }, // ~35% filled
  expert: { clues: 22 }, // ~27% filled
}

/**
 * Helper to validate if a difficulty string is valid
 *
 * LEARNING NOTE: Type guards in TypeScript
 * - This function narrows the type from 'string' to 'Difficulty'
 * - The 'is' keyword creates a type predicate
 * - Useful when parsing user input or API responses
 */
export function isDifficulty(value: string): value is Difficulty {
  return ['easy', 'medium', 'hard', 'expert'].includes(value)
}
