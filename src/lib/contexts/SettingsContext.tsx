'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

/**
 * Application settings type
 *
 * LEARNING NOTE: Organizing settings
 * - Group related settings together
 * - Use clear, descriptive names
 * - Provide sensible defaults
 */
export interface AppSettings {
  // Game behavior
  autoCheckErrors: boolean
  highlightConflicts: boolean
  highlightSameNumbers: boolean
  highlightRelatedCells: boolean
  showTimer: boolean

  // Assistance
  autoRemoveNotes: boolean
  showMistakesCounter: boolean
  allowUndo: boolean

  // Display
  darkMode: boolean
  numberButtonPosition: 'top' | 'bottom' | 'side'
  cellSize: 'small' | 'medium' | 'large'

  // Sound
  soundEffects: boolean
  completionSound: boolean
}

/**
 * Default settings
 */
export const DEFAULT_SETTINGS: AppSettings = {
  // Game behavior
  autoCheckErrors: true,
  highlightConflicts: true,
  highlightSameNumbers: false,
  highlightRelatedCells: false,
  showTimer: true,

  // Assistance
  autoRemoveNotes: true,
  showMistakesCounter: true,
  allowUndo: true,

  // Display
  darkMode: false,
  numberButtonPosition: 'bottom',
  cellSize: 'medium',

  // Sound
  soundEffects: true,
  completionSound: true,
}

/**
 * Settings context value
 */
interface SettingsContextValue {
  settings: AppSettings
  updateSettings: (updates: Partial<AppSettings>) => void
  resetSettings: () => void
}

const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined
)

const STORAGE_KEY = 'sudoku-settings'

/**
 * Settings provider component
 *
 * LEARNING NOTE: Context + localStorage pattern
 * - Provides settings to entire app
 * - Persists settings across sessions
 * - Syncs with localStorage on changes
 *
 * TODO: Implement localStorage sync
 */
export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS)

  // Load settings from localStorage on mount
  useEffect(() => {
    // TODO: Load from localStorage
    // const stored = localStorage.getItem(STORAGE_KEY)
    // if (stored) {
    //   try {
    //     setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(stored) })
    //   } catch (e) {
    //     console.error('Failed to load settings:', e)
    //   }
    // }
  }, [])

  // Save settings to localStorage when they change
  useEffect(() => {
    // TODO: Save to localStorage
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  const updateSettings = (updates: Partial<AppSettings>) => {
    setSettings((prev) => ({ ...prev, ...updates }))
  }

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS)
  }

  return (
    <SettingsContext.Provider
      value={{ settings, updateSettings, resetSettings }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

/**
 * Hook to access settings
 *
 * LEARNING NOTE: Custom hooks for context
 * - Provides type-safe access to context
 * - Throws helpful error if used outside provider
 */
export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider')
  }
  return context
}
