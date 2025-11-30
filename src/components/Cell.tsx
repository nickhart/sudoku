'use client'

/**
 * Cell Component - Represents a single Sudoku cell
 *
 * LEARNING NOTE: Controlled Component Pattern
 * - Parent (Board) controls the value
 * - Cell notifies parent on changes via callback
 * - Single source of truth (the parent's state)
 *
 * This is a CLIENT component because it needs:
 * - Event handlers (onClick, onChange)
 * - Interactive behavior
 */

import { Cell as CellType } from '@sudoku/core'

interface CellProps {
  cell: CellType
  row: number
  col: number
  isSelected?: boolean
  onCellClick?: (row: number, col: number) => void
  onValueChange?: (row: number, col: number, value: number | null) => void
}

export function Cell({
  cell,
  row,
  col,
  isSelected = false,
  onCellClick,
  onValueChange,
}: CellProps) {
  /**
   * Handle input change
   *
   * TODO: Implement this handler
   * - Parse the input value (1-9 or empty)
   * - Call onValueChange with parsed value
   * - Handle invalid inputs gracefully
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: YOUR IMPLEMENTATION HERE
    //
    // Suggested approach:
    // const value = e.target.value
    // if (value === '') {
    //   onValueChange?.(row, col, null)
    // } else {
    //   const num = parseInt(value, 10)
    //   if (num >= 1 && num <= 9) {
    //     onValueChange?.(row, col, num)
    //   }
    // }
    console.log('handleChange not implemented', e.target.value)
  }

  /**
   * Handle cell click
   */
  const handleClick = () => {
    onCellClick?.(row, col)
  }

  /**
   * Handle keyboard input
   *
   * LEARNING NOTE: Keyboard navigation
   * - Arrow keys to move between cells
   * - Number keys to enter values
   * - Delete/Backspace to clear
   *
   * TODO: Implement keyboard navigation (optional enhancement)
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // TODO: YOUR IMPLEMENTATION HERE (optional)
    // Handle arrow keys, number keys, delete, etc.
  }

  // Determine cell styling based on state
  const cellClasses = [
    'w-12 h-12 border border-gray-300',
    'text-center font-bold text-lg',
    'focus:outline-none focus:ring-2 focus:ring-blue-500',
    'transition-colors',
    // TODO: Add conditional classes
    // - cell.isGiven ? 'cell-given' : ''
    // - !cell.isValid ? 'cell-invalid' : ''
    // - isSelected ? 'ring-2 ring-blue-400' : ''
  ].join(' ')

  return (
    <input
      type="text"
      maxLength={1}
      value={cell.value ?? ''}
      onChange={handleChange}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={cell.isGiven}
      className={cellClasses}
      aria-label={`Cell row ${row + 1} column ${col + 1}`}
    />
  )
}
