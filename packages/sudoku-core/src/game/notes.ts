import { SudokuValue } from '../types'

/**
 * Note state for a single value in a cell
 *
 * LEARNING NOTE: Tri-state enum
 * - -1: Value is explicitly excluded (user marked "this can't be here")
 * - 0: Unmarked (no opinion)
 * - 1: Value is included as a candidate (traditional pencil mark)
 */
export type NoteState = -1 | 0 | 1

/**
 * Notes for a Sudoku cell
 *
 * LEARNING NOTE: Fixed-length tuple for type safety
 * - Exactly 9 elements, one for each possible value (1-9)
 * - Index 0 represents value 1, index 1 represents value 2, etc.
 * - O(1) access: notes[value - 1]
 * - Cannot have conflicts (a value can't be both included AND excluded)
 * - Maps directly to UI (9 buttons with 3 states each)
 *
 * Alternative: Could use Array<NoteState> for flexibility
 */
export type Notes = readonly [
  NoteState,
  NoteState,
  NoteState,
  NoteState,
  NoteState,
  NoteState,
  NoteState,
  NoteState,
  NoteState,
]

/**
 * Creates an empty notes array (all unmarked)
 *
 * TODO: Implement this factory
 * HINT: Return array of 9 zeros cast as Notes type
 *
 * @returns A new Notes array with all values unmarked (0)
 */
export function createEmptyNotes(): Notes {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: createEmptyNotes')
}

/**
 * Gets the note state for a specific value
 *
 * TODO: Implement this accessor
 * HINT: Handle value 0 (empty cell) specially, return 0
 * HINT: Access notes[value - 1] for values 1-9
 *
 * @param notes - The notes array
 * @param value - The value to check (1-9)
 * @returns The state of that note (-1, 0, or 1)
 */
export function getNoteState(notes: Notes, value: SudokuValue): NoteState {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getNoteState')
}

/**
 * Sets the note state for a specific value (immutably)
 *
 * TODO: Implement this updater
 * HINT: Create new array with spread operator or map
 * HINT: Update notes[value - 1] = state
 *
 * @param notes - The current notes array
 * @param value - The value to update (1-9)
 * @param state - The new state (-1, 0, or 1)
 * @returns A NEW notes array with the state updated
 */
export function setNoteState(
  notes: Notes,
  value: SudokuValue,
  state: NoteState
): Notes {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: setNoteState')
}

/**
 * Toggles a note between included (1) and unmarked (0)
 *
 * TODO: Implement this toggle
 * HINT: If current state is 1, set to 0; otherwise set to 1
 * HINT: Use getNoteState and setNoteState
 *
 * @param notes - The current notes array
 * @param value - The value to toggle (1-9)
 * @returns A NEW notes array with the note toggled
 */
export function toggleNoteIncluded(notes: Notes, value: SudokuValue): Notes {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: toggleNoteIncluded')
}

/**
 * Toggles a note between excluded (-1) and unmarked (0)
 *
 * TODO: Implement this toggle
 * HINT: If current state is -1, set to 0; otherwise set to -1
 * HINT: Use getNoteState and setNoteState
 *
 * @param notes - The current notes array
 * @param value - The value to toggle (1-9)
 * @returns A NEW notes array with the note toggled
 */
export function toggleNoteExcluded(notes: Notes, value: SudokuValue): Notes {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: toggleNoteExcluded')
}

/**
 * Gets all included notes (state === 1)
 *
 * TODO: Implement this filter
 * HINT: Map over notes with index, filter where state === 1
 * HINT: Convert index back to value: (index + 1) as SudokuValue
 *
 * @param notes - The notes array
 * @returns Array of values that are included (1-9)
 */
export function getIncludedNotes(notes: Notes): SudokuValue[] {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getIncludedNotes')
}

/**
 * Gets all excluded notes (state === -1)
 *
 * TODO: Implement this filter
 * HINT: Map over notes with index, filter where state === -1
 * HINT: Convert index back to value: (index + 1) as SudokuValue
 *
 * @param notes - The notes array
 * @returns Array of values that are excluded (1-9)
 */
export function getExcludedNotes(notes: Notes): SudokuValue[] {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: getExcludedNotes')
}

/**
 * Clears all notes (sets all to unmarked)
 *
 * TODO: Implement this reset
 * HINT: Just return createEmptyNotes()
 *
 * @returns A NEW notes array with all values unmarked
 */
export function clearNotes(): Notes {
  // TODO: YOUR IMPLEMENTATION HERE
  throw new Error('Not implemented: clearNotes')
}
