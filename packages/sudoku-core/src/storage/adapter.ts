/**
 * Platform-agnostic storage interface
 *
 * LEARNING NOTE: Dependency Inversion Principle
 * - Core package defines the INTERFACE
 * - Each platform provides the IMPLEMENTATION
 * - Web uses localStorage
 * - React Native would use AsyncStorage
 * - Tests can use in-memory storage
 *
 * This is a key pattern in clean architecture!
 */

/**
 * Storage adapter interface
 *
 * LEARNING NOTE: Why async?
 * - Web localStorage is synchronous
 * - React Native AsyncStorage is asynchronous
 * - Making everything async works for both
 * - Async is more future-proof (can add network storage later)
 */
export interface StorageAdapter {
  /**
   * Get item from storage
   *
   * @param key - Storage key
   * @returns Value as string, or null if not found
   */
  getItem(key: string): Promise<string | null>

  /**
   * Set item in storage
   *
   * @param key - Storage key
   * @param value - Value to store (as string)
   */
  setItem(key: string, value: string): Promise<void>

  /**
   * Remove item from storage
   *
   * @param key - Storage key
   */
  removeItem(key: string): Promise<void>

  /**
   * Get all keys in storage
   *
   * @returns Array of all storage keys
   */
  getAllKeys(): Promise<string[]>

  /**
   * Clear all items from storage
   */
  clear(): Promise<void>
}

/**
 * Storage key constants
 *
 * LEARNING NOTE: Constants for magic strings
 * - Prevents typos
 * - Easy to refactor
 * - Documents what keys are used
 */
export const STORAGE_KEYS = {
  CURRENT_GAME: 'sudoku:current-game',
  SAVED_GAMES: 'sudoku:saved-games',
  SETTINGS: 'sudoku:settings',
  STATISTICS: 'sudoku:statistics',
} as const

/**
 * Helper type for storage keys
 *
 * LEARNING NOTE: TypeScript utility types
 * - typeof STORAGE_KEYS gives us the object type
 * - [keyof typeof STORAGE_KEYS] gives us the union of value types
 * - Result: 'sudoku:current-game' | 'sudoku:saved-games' | ...
 */
export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS]
