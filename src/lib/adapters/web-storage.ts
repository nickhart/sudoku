/**
 * Web Storage Adapter - localStorage implementation
 *
 * LEARNING NOTE: Adapter Pattern
 * - Implements the StorageAdapter interface from core
 * - Wraps browser's localStorage API
 * - Makes async to match interface (even though localStorage is sync)
 * - Easy to swap with other implementations (sessionStorage, etc.)
 */

import { StorageAdapter } from '@sudoku/core'

/**
 * localStorage adapter for web platform
 *
 * LEARNING NOTE: Why wrap localStorage?
 * - Type safety with TypeScript
 * - Error handling in one place
 * - Easy to mock for testing
 * - Consistent async interface
 */
export class WebStorageAdapter implements StorageAdapter {
  /**
   * Get item from localStorage
   *
   * LEARNING NOTE: Error handling
   * - localStorage can throw if disabled or in private mode
   * - Always wrap in try/catch
   * - Return null on errors (graceful degradation)
   */
  async getItem(key: string): Promise<string | null> {
    try {
      // Check if localStorage is available
      if (typeof window === 'undefined' || !window.localStorage) {
        return null
      }
      return window.localStorage.getItem(key)
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return null
    }
  }

  /**
   * Set item in localStorage
   */
  async setItem(key: string, value: string): Promise<void> {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return
      }
      window.localStorage.setItem(key, value)
    } catch (error) {
      console.error('Error writing to localStorage:', error)
      // TODO: Handle quota exceeded error
      // if (error.name === 'QuotaExceededError') { ... }
    }
  }

  /**
   * Remove item from localStorage
   */
  async removeItem(key: string): Promise<void> {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return
      }
      window.localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  }

  /**
   * Get all keys from localStorage
   *
   * LEARNING NOTE: localStorage.key(index)
   * - localStorage has numeric indices for keys
   * - Loop through to get all keys
   */
  async getAllKeys(): Promise<string[]> {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return []
      }

      const keys: string[] = []
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i)
        if (key) {
          keys.push(key)
        }
      }
      return keys
    } catch (error) {
      console.error('Error getting keys from localStorage:', error)
      return []
    }
  }

  /**
   * Clear all items from localStorage
   *
   * WARNING: This clears EVERYTHING in localStorage, not just app data
   * In production, you might want to clear only keys with specific prefix
   */
  async clear(): Promise<void> {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return
      }
      window.localStorage.clear()
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  }
}

/**
 * Helper to get storage size in bytes
 *
 * LEARNING NOTE: Measuring localStorage usage
 * - localStorage has a limit (usually 5-10MB)
 * - Useful for debugging and user info
 */
export function getStorageSize(): number {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return 0
    }

    let total = 0
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i)
      if (key) {
        const value = window.localStorage.getItem(key)
        if (value) {
          // Each character is 2 bytes in UTF-16
          total += (key.length + value.length) * 2
        }
      }
    }
    return total
  } catch {
    return 0
  }
}

/**
 * Helper to format bytes to human-readable size
 */
export function formatStorageSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

// Export singleton instance
export const webStorage = new WebStorageAdapter()
