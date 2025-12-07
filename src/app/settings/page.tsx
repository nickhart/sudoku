'use client'

/**
 * Settings page
 *
 * LEARNING NOTE: Form state management
 * - Uses context for global settings
 * - Immediate updates (no save button needed)
 * - Groups related settings for clarity
 */

import { useSettings } from '@/lib/contexts/SettingsContext'
import Link from 'next/link'

export default function SettingsPage() {
  const { settings, updateSettings, resetSettings } = useSettings()

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            ← Back to Menu
          </Link>
          <button
            onClick={resetSettings}
            className="text-sm text-red-600 hover:text-red-700 dark:text-red-400"
          >
            Reset to Defaults
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Game Behavior */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Game Behavior</h2>
            <div className="space-y-3">
              <SettingToggle
                label="Auto-check errors"
                description="Automatically highlight invalid moves in real-time"
                checked={settings.autoCheckErrors}
                onChange={(checked) =>
                  updateSettings({ autoCheckErrors: checked })
                }
              />
              <SettingToggle
                label="Highlight conflicts"
                description="Show cells that conflict with each other"
                checked={settings.highlightConflicts}
                onChange={(checked) =>
                  updateSettings({ highlightConflicts: checked })
                }
              />
              <SettingToggle
                label="Highlight same numbers"
                description="Highlight all cells with the same number as selected cell"
                checked={settings.highlightSameNumbers}
                onChange={(checked) =>
                  updateSettings({ highlightSameNumbers: checked })
                }
              />
              <SettingToggle
                label="Highlight related cells"
                description="Highlight cells in the same row, column, and box"
                checked={settings.highlightRelatedCells}
                onChange={(checked) =>
                  updateSettings({ highlightRelatedCells: checked })
                }
              />
              <SettingToggle
                label="Show timer"
                description="Display elapsed time while playing"
                checked={settings.showTimer}
                onChange={(checked) => updateSettings({ showTimer: checked })}
              />
            </div>
          </section>

          {/* Assistance */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Assistance</h2>
            <div className="space-y-3">
              <SettingToggle
                label="Auto-remove notes"
                description="Remove notes automatically when a number is placed"
                checked={settings.autoRemoveNotes}
                onChange={(checked) =>
                  updateSettings({ autoRemoveNotes: checked })
                }
              />
              <SettingToggle
                label="Show mistakes counter"
                description="Track number of incorrect moves"
                checked={settings.showMistakesCounter}
                onChange={(checked) =>
                  updateSettings({ showMistakesCounter: checked })
                }
              />
              <SettingToggle
                label="Allow undo"
                description="Enable undo/redo functionality"
                checked={settings.allowUndo}
                onChange={(checked) => updateSettings({ allowUndo: checked })}
              />
            </div>
          </section>

          {/* Display */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Display</h2>
            <div className="space-y-4">
              <SettingToggle
                label="Dark mode"
                description="Use dark color scheme"
                checked={settings.darkMode}
                onChange={(checked) => updateSettings({ darkMode: checked })}
              />

              {/* Number button position */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Number button position
                </label>
                <select
                  value={settings.numberButtonPosition}
                  onChange={(e) =>
                    updateSettings({
                      numberButtonPosition: e.target.value as
                        | 'top'
                        | 'bottom'
                        | 'side',
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                >
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
                  <option value="side">Side</option>
                </select>
              </div>

              {/* Cell size */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Cell size
                </label>
                <select
                  value={settings.cellSize}
                  onChange={(e) =>
                    updateSettings({
                      cellSize: e.target.value as 'small' | 'medium' | 'large',
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          </section>

          {/* Sound */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Sound</h2>
            <div className="space-y-3">
              <SettingToggle
                label="Sound effects"
                description="Play sounds for actions (place number, error, etc.)"
                checked={settings.soundEffects}
                onChange={(checked) =>
                  updateSettings({ soundEffects: checked })
                }
              />
              <SettingToggle
                label="Completion sound"
                description="Play sound when puzzle is solved"
                checked={settings.completionSound}
                onChange={(checked) =>
                  updateSettings({ completionSound: checked })
                }
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

/**
 * Reusable toggle setting component
 *
 * TODO: Replace with shadcn/ui Switch component when ready
 */
function SettingToggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string
  description: string
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <label className="text-sm font-medium">{label}</label>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4"
      />
    </div>
  )
}
