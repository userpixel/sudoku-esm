import { times9, times81, setCharAt, xy2r } from './utils.mjs'
import { Checker } from './checker.mjs'
import { traverseCell1D } from './utils.mjs'

export class Board {
  constructor(anotherBoard) {
    if (anotherBoard !== undefined) {
      if (anotherBoard instanceof Board) {
        this.cells = anotherBoard.cells
      } else {
        this.setCellsStr(anotherBoard)
      }
    }
  }

  setCellsStr(val) {
    if (typeof val !== 'string') {
      throw new Error(`Expected string but got ${typeof val}: ${val}`)
    }
    if (/^[1-9\s]{81}$/.test(val) === false) {
      throw new Error(`Expected exactly 81 characters of 1-9 and spaces but got ${val.length}: "${val}"`)
    }

    const oldCells = this.cells
    this.cells = val

    if (!this.isValid()) {
      this.cells = oldCells
      throw new Error('There was an error')
    }
  }

  isValid() {
    const invalidCellExists = times81(r => {
      const currCellValue = this.getCell1D(r)
      if (currCellValue !== ' ') {
        return traverseCell1D(this, r, (cellValue) => {
          if (cellValue === currCellValue ) {
            return cellValue
          }
        })
      }
    })
    return !invalidCellExists
  }

  getCell(x, y) {
    return this.getCell1D(xy2r(x, y))
  }

  getCell1D(r) {
    return this.cells.charAt(r)
  }

  setCell(x, y, val) {
    this.setCell1D(xy2r(x, y), val)
  }

  setCell1D(r, val) {
    this.cells = setCharAt(this.cells, r, val)
  }

  findAllEmptyCells1D() {
    const emptyCellIndices = []
    const { cells } = this
    for (let r = cells.indexOf(' '); r !== -1; r = cells.indexOf(' ', r + 1)) {
      emptyCellIndices.push(r)
    }

    return emptyCellIndices
  }

  getPossibilities1D(r) {
    const checker = new Checker
    traverseCell1D(this, r, cellValue => checker.eliminate(cellValue))
    return checker.getRemaining()
  }

  get isSolved() {
    return this.cells.indexOf(' ') === -1
  }

  toString() {
    const ret = [];
    times9((y) => {
      if (y && !(y % 3)) {
        ret.push('------+-------+-------\n');
      }
      times9((x) => {
        if (x && !(x % 3)) {
          ret.push('| ');
        }
        ret.push(`${this.getCell(x, y)} `);
      })
      ret.push('\n');
    })
    return ret.join('');
  }
}
