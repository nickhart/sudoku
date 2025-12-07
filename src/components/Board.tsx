'use client'

/**
 * Board Component - Renders the 9x9 Sudoku grid
 *
 * LEARNING NOTE: Component Composition
 * - Board contains 81 Cell components
 * - Manages which cell is selected
 * - Passes callbacks down to cells
 * - Coordinates cell interactions
 *
 * LEARNING NOTE: Grid Layout
 * - Using CSS Grid for the 9x9 layout
 * - Visual separation for 3x3 boxes
 * - Responsive design
 */

import { useState } from 'react'
import { Board as BoardType } from '@sudoku/core'
import { Cell } from './Cell'
import { useGame, useSetCell } from '@/lib/contexts/GameContext'

interface BoardProps {
  board: BoardType
}

export function Board({ board }: BoardProps) {
  const [selectedCell, setSelectedCell] = useState<{
    row: number
    col: number
  } | null>(null)

  const setCell = useSetCell()

  /**
   * Handle cell click
   *
   * LEARNING NOTE: Lifting state up
   * - Selected cell state is in Board (parent)
   * - Allows highlighting related cells
   * - Single source of truth
   */
  const handleCellClick = (row: number, col: number) => {
    setSelectedCell({ row, col })
  }

  /**
   * Handle value change
   *
   * TODO: Call the context's setCell function
   */
  const handleValueChange = (
    row: number,
    col: number,
    value: number | null
  ) => {
    // TODO: YOUR IMPLEMENTATION HERE
    // setCell(row, col, value)
    console.log('handleValueChange not implemented', row, col, value)
  }

  /**
   * Check if cell is selected
   */
  const isCellSelected = (row: number, col: number) => {
    return selectedCell?.row === row && selectedCell?.col === col
  }

  /**
   * Get border styles for 3x3 box separation
   *
   * LEARNING NOTE: Dynamic styling
   * - Thicker borders every 3 cells
   * - Creates visual 3x3 boxes
   * - Improves usability
   */
  const getCellBorderClass = (row: number, col: number) => {
    const classes = []

    // Right border for box separation
    if (col === 2 || col === 5) {
      classes.push('border-r-2 border-r-gray-800')
    }

    // Bottom border for box separation
    if (row === 2 || row === 5) {
      classes.push('border-b-2 border-b-gray-800')
    }

    return classes.join(' ')
  }

  return (
    <div className="inline-block bg-gray-800 p-2 rounded-lg shadow-2xl">
      {/* LEARNING NOTE: CSS Grid for 9x9 layout */}
      <div className="grid grid-cols-9 gap-0 bg-gray-800">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={getCellBorderClass(rowIndex, colIndex)}
            >
              <Cell
                cell={cell}
                row={rowIndex}
                col={colIndex}
                isSelected={isCellSelected(rowIndex, colIndex)}
                onCellClick={handleCellClick}
                onValueChange={handleValueChange}
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

/**
 * TODO: Enhancements to implement later:
 *
 * 1. Highlight related cells
 *    - When a cell is selected, highlight its row, column, and box
 *    - Helps users see conflicts
 *
 * 2. Keyboard navigation
 *    - Arrow keys to move between cells
 *    - Tab to move forward, Shift+Tab to move back
 *
 * 3. Conflict highlighting
 *    - Show cells that conflict with selected cell
 *    - Different color for conflicts
 *
 * 4. Notes/Pencil marks
 *    - Small numbers in corners for candidates
 *    - Toggle between value mode and note mode
 *
 * 5. Undo/Redo
 *    - Track move history
 *    - Allow undoing mistakes
 */
