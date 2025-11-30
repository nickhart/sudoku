/**
 * @sudoku/core - Public API
 *
 * LEARNING NOTE: This is the entry point for the package
 * - Only export what consumers need
 * - Internal utilities can stay private
 * - This is your "contract" with consuming code
 */

// Types
export * from './types'

// Game logic
export * from './game'

// Storage interface (implementations are platform-specific)
export * from './storage'
