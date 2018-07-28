import { forEveryCell } from './traverse.mjs'

function normalizeCell(val) {
  let n = val;
  if (typeof val !== 'number') {
    n = Number(val);
  }
  return n < 1 || n > 9 ? 0 : n;
}

export function boardToString(board) {
  const ret = [];
  for (let y = 0; y < 9; y++) {
    if (y !== 0 && !(y % 3)) {
      ret.push('- - - + - - - + - - - \n');
    }
    for (let x = 0; x < 9; x++) {
      if (x !== 0 && !(x % 3)) {
        ret.push('| ');
      }
      ret.push(`${board.getCell(x, y)} `);
    }
    ret.push('\n');
  }
  return ret.join('');
}

export class Board {
  constructor() {
    this.root = this
    this.cells = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.emptyCells = []
  }

  getCell(x, y) {
    return this.cells[x][y];
  }

  fill(...rowsArr) {
    const rows = rowsArr.join('');
    if (rows.length !== 81) {
      throw `Expecting exactly 81 chars found ${rows.length}`;
    }
    for (let r = 0; r < 81; r++) {
      const x = r % 9;
      const y = Math.floor(r / 9);
      const val = normalizeCell(rows.charAt(r));
      this.cells[x][y] = val;
      if (val === 0) {
        this.emptyCells.push([x, y]);
      }
    }
  }

  findFirstEmptyCell() {
    return this.emptyCells.find(([x, y]) => this.getCell(x, y) === 0)
  }

}

export class DiffBoard {
  constructor(parent, x, y, val) {
    this.parent = parent;
    this.root = parent.root;
    this.x = x;
    this.y = y;
    this.val = val;
  }

  getCell(x, y) {
    return x === this.x && y === this.y
      ? this.val
      : this.parent.getCell(x, y);
  }

  findFirstEmptyCell() {
    return this.root.emptyCells.find(([x, y]) => this.getCell(x, y) === 0)
  }

}
