import '@testing-library/jest-dom';
import { Sudoku } from '../Sudoku';

type NumberArray = Array<number>;

class SudokuTestData {
  sudoku: Array<number>;
  expectedRows: Array<NumberArray>;
  expectedColumns: Array<NumberArray>;
  expectedSquares: Array<NumberArray>;
  expectedStats: Array<number>;
}

const sudoku9x9_1: SudokuTestData = {
  sudoku: [
    0, 0, 0, 3, 0, 9, 0, 0, 6, 9, 1, 0, 6, 0, 5, 3, 0, 0, 4, 6, 3, 2, 0, 1, 5, 9, 8, 0, 3, 0, 0, 1,
    8, 0, 0, 5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 0, 7, 2, 0, 0, 3, 0, 3, 9, 4, 8, 0, 2, 7, 5, 1, 0,
    0, 7, 4, 0, 3, 0, 6, 2, 6, 0, 0, 1, 0, 7, 0, 0, 0,
  ],
  expectedRows: [
    [0, 0, 0, 3, 0, 9, 0, 0, 6],
    [9, 1, 0, 6, 0, 5, 3, 0, 0],
    [4, 6, 3, 2, 0, 1, 5, 9, 8], // freebie
    [0, 3, 0, 0, 1, 8, 0, 0, 5],
    [0, 0, 0, 0, 3, 0, 0, 0, 0],
    [5, 0, 0, 7, 2, 0, 0, 3, 0],
    [3, 9, 4, 8, 0, 2, 7, 5, 1], // freebie
    [0, 0, 7, 4, 0, 3, 0, 6, 2],
    [6, 0, 0, 1, 0, 7, 0, 0, 0],
  ],
  expectedColumns: [
    [0, 9, 4, 0, 0, 5, 3, 0, 6],
    [0, 1, 6, 3, 0, 0, 9, 0, 0],
    [0, 0, 3, 0, 0, 0, 4, 7, 0],
    [3, 6, 2, 0, 0, 7, 8, 4, 1],
    [0, 0, 0, 1, 3, 2, 0, 0, 0],
    [9, 5, 1, 8, 0, 0, 2, 3, 7],
    [0, 3, 5, 0, 0, 0, 7, 0, 0],
    [0, 0, 9, 0, 0, 3, 5, 6, 0],
    [6, 0, 8, 5, 0, 0, 1, 2, 0],
  ],
  expectedSquares: [
    [0, 0, 0, 9, 1, 0, 4, 6, 3],
    [3, 0, 9, 6, 0, 5, 2, 0, 1],
    [0, 0, 6, 3, 0, 0, 5, 9, 8],
    [0, 3, 0, 0, 0, 0, 5, 0, 0],
    [0, 1, 8, 0, 3, 0, 7, 2, 0],
    [0, 0, 5, 0, 0, 0, 0, 3, 0],
    [3, 9, 4, 0, 0, 7, 6, 0, 0],
    [8, 0, 2, 4, 0, 3, 1, 0, 7],
    [7, 5, 1, 0, 6, 2, 0, 0, 0],
  ],
  expectedStats: [40, 5, 4, 8, 3, 5, 5, 4, 3, 4],
};

const generateSudoku = function (size: number) {
  const result = new Sudoku(size);

  // this is not a valid Sudoku grid, but each value is unique!
  const bufferSize = size * size;
  for (let index = 0; index != bufferSize; index++) {
    result.cells[index].value = index;
  }

  // don't forget to call this whenever a change is made
  // pass false to not use strict numbering
  result.updateDerivedData(false);

  return result;
};

const importSudoku = function (data: Array<number>) {
  const size = Math.floor(Math.sqrt(data.length));
  const result = new Sudoku(size);

  // this is not a valid Sudoku grid, but each value is unique!
  const bufferSize = size * size;
  for (let index = 0; index != bufferSize; index++) {
    result.cells[index].value = data[index];
  }

  // don't forget to call this whenever a change is made
  result.updateDerivedData();

  return result;
};

describe('Sudoku', () => {
  it('can get the correct row (4x4)', () => {
    const sudoku = generateSudoku(4);
    expect(sudoku.cells.length).toStrictEqual(16);

    for (let i = 0; i != 16; i++) {
      expect(sudoku.cells[i].value).toStrictEqual(i);
    }

    const row0 = sudoku.rows[0];
    let cells = row0.cells;
    let row = cells.map(cell => cell.value);
    expect(row).toStrictEqual([0, 1, 2, 3]);

    cells = sudoku.rows[1].cells;
    row = cells.map(cell => cell.value);
    expect(row).toStrictEqual([4, 5, 6, 7]);
    cells = sudoku.rows[2].cells;
    row = cells.map(cell => cell.value);
    expect(row).toStrictEqual([8, 9, 10, 11]);
    cells = sudoku.rows[3].cells;
    row = cells.map(cell => cell.value);
    expect(row).toStrictEqual([12, 13, 14, 15]);
  });

  it('can get the correct column (4x4)', () => {
    const sudoku = generateSudoku(4);
    let column = sudoku.columns[0].cells.map(cell => cell.value);
    expect(column).toStrictEqual([0, 4, 8, 12]);
    column = sudoku.columns[1].cells.map(cell => cell.value);
    expect(column).toStrictEqual([1, 5, 9, 13]);
    column = sudoku.columns[2].cells.map(cell => cell.value);
    expect(column).toStrictEqual([2, 6, 10, 14]);
    column = sudoku.columns[3].cells.map(cell => cell.value);
    expect(column).toStrictEqual([3, 7, 11, 15]);
  });

  it('can get the correct square (4x4)', () => {
    const sudoku = generateSudoku(4);
    let square = sudoku.squares[0].cells.map(cell => cell.value);
    expect(square).toStrictEqual([0, 1, 4, 5]);
    square = sudoku.squares[1].cells.map(cell => cell.value);
    expect(square).toStrictEqual([2, 3, 6, 7]);
    square = sudoku.squares[2].cells.map(cell => cell.value);
    expect(square).toStrictEqual([8, 9, 12, 13]);
    square = sudoku.squares[3].cells.map(cell => cell.value);
    expect(square).toStrictEqual([10, 11, 14, 15]);
  });

  it('records correct stats for each value (4x4)', () => {
    const sudoku = generateSudoku(4);
    const stats = sudoku.stats;
    expect(stats.reduce((accumulator, currentValue) => accumulator + currentValue, 0)).toBe(16);
    for (let i = 0; i != 16; i++) {
      expect(stats[i]).toBe(1);
    }
  });

  it('works for a 9x9 sudoku', () => {
    const sudoku = importSudoku(sudoku9x9_1.sudoku);
    const expectedRows = sudoku9x9_1.expectedRows;
    const expectedCols = sudoku9x9_1.expectedColumns;
    const expectedSquares = sudoku9x9_1.expectedSquares;
    const expectedStats = sudoku9x9_1.expectedStats;

    expect(expectedStats.reduce((accumulator, currentValue) => accumulator + currentValue, 0)).toBe(
      sudoku.cells.length,
    );

    const stats = sudoku.stats;
    expect(stats.reduce((accumulator, currentValue) => accumulator + currentValue, 0)).toBe(81);
    expect(stats).toStrictEqual(expectedStats);

    for (let i = 0; i != 9; i++) {
      const row = sudoku.rows[i].cells.map(cell => cell.value);
      expect(row).toStrictEqual(expectedRows[i]);
      const column = sudoku.columns[i].cells.map(cell => cell.value);
      expect(column).toStrictEqual(expectedCols[i]);
      const square = sudoku.squares[i].cells.map(cell => cell.value);
      expect(square).toStrictEqual(expectedSquares[i]);
    }
  });

  it('annotates singles in a 9x9 sudoku', () => {
    const sudoku = importSudoku(sudoku9x9_1.sudoku);

    sudoku.annotateSingles();
    expect(sudoku.getAnnotations(2, 4)).toStrictEqual([7]);
    expect(sudoku.getAnnotations(6, 4)).toStrictEqual([6]);
  });
});
