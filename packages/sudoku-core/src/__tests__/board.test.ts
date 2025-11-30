/**
 * Board function tests
 *
 * LEARNING NOTE: Testing pure functions
 * - Pure functions are easy to test
 * - No mocks needed (no dependencies)
 * - Clear input -> output expectations
 * - Fast execution
 *
 * TODO: Uncomment tests as you implement functions
 */

import {
  createEmptyBoard,
  createEmptyCell,
  createCell,
  setCell,
  getCell,
  clearCell,
  // ... import other functions
} from '../game/board'

describe('Board Functions', () => {
  describe('createEmptyBoard', () => {
    it.skip('should create a 9x9 board', () => {
      // TODO: Uncomment when implemented
      // const board = createEmptyBoard()
      // expect(board).toHaveLength(9)
      // expect(board[0]).toHaveLength(9)
    })

    it.skip('should have all empty cells', () => {
      // TODO: Uncomment when implemented
      // const board = createEmptyBoard()
      // board.forEach(row => {
      //   row.forEach(cell => {
      //     expect(cell.value).toBeNull()
      //     expect(cell.isGiven).toBe(false)
      //   })
      // })
    })
  })

  describe('createEmptyCell', () => {
    it.skip('should create an empty cell', () => {
      // TODO: Uncomment when implemented
      // const cell = createEmptyCell()
      // expect(cell.value).toBeNull()
      // expect(cell.isGiven).toBe(false)
      // expect(cell.isValid).toBe(true)
      // expect(cell.notes).toEqual([])
    })
  })

  describe('createCell', () => {
    it.skip('should create a cell with value', () => {
      // TODO: Uncomment when implemented
      // const cell = createCell(5)
      // expect(cell.value).toBe(5)
      // expect(cell.isGiven).toBe(false)
    })

    it.skip('should create a given cell', () => {
      // TODO: Uncomment when implemented
      // const cell = createCell(5, true)
      // expect(cell.value).toBe(5)
      // expect(cell.isGiven).toBe(true)
    })
  })

  describe('setCell', () => {
    it.skip('should update cell value immutably', () => {
      // TODO: Uncomment when implemented
      // const board = createEmptyBoard()
      // const newBoard = setCell(board, 0, 0, 5)
      //
      // // Original board unchanged
      // expect(getCell(board, 0, 0)).toBeNull()
      //
      // // New board has update
      // expect(getCell(newBoard, 0, 0)).toBe(5)
      //
      // // Different reference (immutability)
      // expect(newBoard).not.toBe(board)
    })
  })

  // TODO: Add more tests for other functions
  // - getCell
  // - clearCell
  // - toggleNote
  // - getRow
  // - getColumn
  // - getBox
  // - isBoardFilled
  // - getFilledCellCount
})

/**
 * LEARNING NOTE: Test-Driven Development (TDD)
 *
 * Try this approach:
 * 1. Write test first (it will fail - that's ok!)
 * 2. Implement the function to make test pass
 * 3. Refactor if needed
 * 4. Repeat
 *
 * Benefits:
 * - Tests define the requirements
 * - You know when you're done (tests pass)
 * - Prevents regressions
 * - Better code design
 */
