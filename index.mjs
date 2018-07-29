import { Board } from './lib/board.mjs';
import { solve } from './lib/solver.mjs';

const b = new Board(
  '956      ' +
  '        5' +
  // ' 8  463 7' +
  // '6  28   1' +
  '         ' +
  '         ' +
  '5  7  48 ' +
  '2        ' +
  '  5 7  4 ' +
  '     372 ' +
  '      6  '
);

console.log('Starting with:')
console.log(b.toString())
console.time('computation');
const answerBoards = solve(b);
console.timeEnd('computation')
console.log(`Found ${answerBoards.length} answers:`)
answerBoards.forEach(answerBoard => console.log(`${answerBoard}`))
console.log('Done!')
