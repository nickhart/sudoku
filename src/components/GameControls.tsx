'use client'

/**
 * Game Controls Component
 *
 * LEARNING NOTE: UI Controls Pattern
 * - Separate controls from game board
 * - Clear, labeled actions
 * - Disabled states when appropriate
 * - Feedback on actions
 */

import { useGame, useNewGame, useHint } from '@/lib/contexts/GameContext'
import { Difficulty } from '@sudoku/core'

export function GameControls() {
  const { state } = useGame()
  const startNewGame = useNewGame()
  const requestHint = useHint()

  /**
   * Handle new game button
   *
   * TODO: Implement difficulty selection
   * - Could use a dropdown/select
   * - Or separate buttons for each difficulty
   * - For now, defaults to 'easy'
   */
  const handleNewGame = (difficulty: Difficulty = 'easy') => {
    startNewGame(difficulty)
  }

  /**
   * Handle reset button
   *
   * TODO: Dispatch RESET_GAME action
   */
  const handleReset = () => {
    // TODO: YOUR IMPLEMENTATION HERE
    console.log('handleReset not implemented')
  }

  /**
   * Handle hint button
   */
  const handleHint = () => {
    requestHint()
  }

  /**
   * Handle check solution button
   *
   * TODO: Dispatch CHECK_SOLUTION action
   */
  const handleCheck = () => {
    // TODO: YOUR IMPLEMENTATION HERE
    console.log('handleCheck not implemented')
  }

  return (
    <div className="space-y-4">
      {/* Game Info */}
      {state && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Difficulty:</span>
              <span className="ml-2 font-semibold capitalize">
                {state.originalPuzzle.difficulty}
              </span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Moves:</span>
              <span className="ml-2 font-semibold">{state.moves}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Hints Used:</span>
              <span className="ml-2 font-semibold">{state.hintsUsed}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Status:</span>
              <span className="ml-2 font-semibold">
                {state.completed ? '✅ Solved!' : '🎮 In Progress'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* New Game Buttons */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">
          New Game
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleNewGame('easy')}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Easy
          </button>
          <button
            onClick={() => handleNewGame('medium')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Medium
          </button>
          <button
            onClick={() => handleNewGame('hard')}
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Hard
          </button>
          <button
            onClick={() => handleNewGame('expert')}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Expert
          </button>
        </div>
      </div>

      {/* Game Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">
          Actions
        </h3>
        <div className="space-y-2">
          <button
            onClick={handleHint}
            disabled={!state || state.completed}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded transition-colors"
          >
            💡 Get Hint
          </button>
          <button
            onClick={handleReset}
            disabled={!state}
            className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded transition-colors"
          >
            🔄 Reset Puzzle
          </button>
          <button
            onClick={handleCheck}
            disabled={!state}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded transition-colors"
          >
            ✓ Check Solution
          </button>
        </div>
      </div>

      {/* TODO: Add timer display */}
      {/* TODO: Add undo/redo buttons */}
      {/* TODO: Add save/load buttons */}
    </div>
  )
}

/**
 * TODO: Enhancements to implement later:
 *
 * 1. Timer
 *    - Track elapsed time
 *    - Display in MM:SS format
 *    - Pause/resume functionality
 *
 * 2. Undo/Redo
 *    - Maintain move history
 *    - Navigate through moves
 *
 * 3. Save/Load
 *    - Save game to localStorage
 *    - Load saved games
 *    - Multiple save slots
 *
 * 4. Statistics
 *    - Win/loss record
 *    - Best times per difficulty
 *    - Streak tracking
 *
 * 5. Confirmation dialogs
 *    - Confirm before starting new game (if current game in progress)
 *    - Confirm before reset
 */
