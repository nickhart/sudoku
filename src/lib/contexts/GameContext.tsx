'use client'

/**
 * Game Context Provider
 *
 * LEARNING NOTE: React Context + useReducer pattern
 * - Context: Share state across components without prop drilling
 * - useReducer: Manage complex state with actions (like Redux, but simpler)
 * - Combining them: Powerful state management for medium-sized apps
 *
 * Why this pattern?
 * - Predictable state updates (dispatch actions)
 * - Easy to test (reducer is a pure function)
 * - Clear separation of state logic and UI
 * - TypeScript ensures type-safe actions
 */

import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { GameState, GameAction } from '@sudoku/core'

/**
 * Context value type
 *
 * LEARNING NOTE: Context provides both state and dispatch
 * - state: Current game state (readonly)
 * - dispatch: Function to send actions
 */
type GameContextType = {
  state: GameState | null
  dispatch: React.Dispatch<GameAction>
}

// Create context with undefined initial value
const GameContext = createContext<GameContextType | undefined>(undefined)

/**
 * Game state reducer
 *
 * LEARNING NOTE: Reducer pattern
 * - Takes current state + action
 * - Returns NEW state (immutable!)
 * - Never modifies existing state
 *
 * Pattern:
 * - Use switch on action.type
 * - Each case returns new state object
 * - Use spread operator to copy state
 * - Default case returns unchanged state
 *
 * TODO: Implement each action handler
 * HINT: Import functions from @sudoku/core (setCell, clearCell, etc.)
 *
 * @param state - Current game state
 * @param action - Action to perform
 * @returns New game state
 */
function gameReducer(
  state: GameState | null,
  action: GameAction
): GameState | null {
  // TODO: YOUR IMPLEMENTATION HERE
  //
  // Example structure:
  // switch (action.type) {
  //   case 'SET_CELL':
  //     if (!state) return null
  //     const newBoard = setCell(state.currentBoard, action.row, action.col, action.value)
  //     return {
  //       ...state,
  //       currentBoard: newBoard,
  //       moves: state.moves + 1,
  //       // TODO: Check if puzzle is completed
  //     }
  //
  //   case 'NEW_GAME':
  //     return {
  //       currentBoard: action.puzzle.puzzle,
  //       originalPuzzle: action.puzzle,
  //       startTime: new Date(),
  //       completed: false,
  //       moves: 0,
  //       hintsUsed: 0,
  //     }
  //
  //   case 'CLEAR_CELL':
  //     // TODO: Implement
  //     return state
  //
  //   case 'TOGGLE_NOTE':
  //     // TODO: Implement
  //     return state
  //
  //   case 'REQUEST_HINT':
  //     // TODO: Implement (use getHint function)
  //     return state
  //
  //   case 'RESET_GAME':
  //     // TODO: Reset to original puzzle
  //     return state
  //
  //   case 'CHECK_SOLUTION':
  //     // TODO: Validate current board
  //     return state
  //
  //   default:
  //     return state
  // }

  console.warn('gameReducer not implemented yet')
  return state
}

/**
 * Provider component
 *
 * LEARNING NOTE: Provider pattern
 * - Wraps your app (or part of it)
 * - Makes state available to all children
 * - Use in layout.tsx or page.tsx
 */
export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, null)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

/**
 * Custom hook to use game context
 *
 * LEARNING NOTE: Custom hooks
 * - Encapsulates context usage
 * - Provides better error messages
 * - Makes consuming code cleaner
 *
 * Usage:
 *   const { state, dispatch } = useGame()
 *   dispatch({ type: 'SET_CELL', row: 0, col: 0, value: 5 })
 */
export function useGame() {
  const context = useContext(GameContext)

  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider')
  }

  return context
}

/**
 * Helper hooks for common operations
 *
 * LEARNING NOTE: Derived hooks
 * - Build on top of useGame
 * - Provide convenient APIs
 * - Encapsulate common patterns
 */

/**
 * Hook to start a new game
 */
export function useNewGame() {
  const { dispatch } = useGame()

  return (difficulty: 'easy' | 'medium' | 'hard' | 'expert') => {
    // TODO: Generate puzzle and dispatch NEW_GAME action
    // import { generatePuzzle } from '@sudoku/core'
    // const puzzle = generatePuzzle(difficulty)
    // dispatch({ type: 'NEW_GAME', puzzle })
    console.warn('useNewGame not implemented yet')
  }
}

/**
 * Hook to make a move
 */
export function useSetCell() {
  const { dispatch } = useGame()

  return (row: number, col: number, value: number | null) => {
    dispatch({
      type: 'SET_CELL',
      row,
      col,
      value: value as any, // TODO: Fix type
    })
  }
}

/**
 * Hook to request a hint
 */
export function useHint() {
  const { dispatch } = useGame()

  return () => {
    dispatch({ type: 'REQUEST_HINT' })
  }
}
