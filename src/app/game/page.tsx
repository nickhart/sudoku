'use client'

/**
 * Game page - Main Sudoku gameplay
 *
 * LEARNING NOTE: Client component for interactivity
 * - Needs 'use client' for game state and interactions
 * - This is where the actual Sudoku game lives
 */

import { Board } from '@/components/Board'
import { GameControls } from '@/components/GameControls'
import Link from 'next/link'

export default function GamePage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with back button */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            ← Back to Menu
          </Link>

          <div className="flex items-center gap-4">
            {/* TODO: Add timer component */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Timer: 00:00
            </div>

            {/* TODO: Add mistakes counter */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Mistakes: 0/3
            </div>
          </div>
        </div>

        {/* Game board */}
        <div className="mb-6">
          <Board />
        </div>

        {/* Game controls */}
        <GameControls />

        {/* TODO: Add number input pad */}
        {/* TODO: Add notes mode toggle */}
        {/* TODO: Add pause overlay */}
      </div>
    </main>
  )
}
