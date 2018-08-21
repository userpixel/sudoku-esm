import { solve } from './lib/solver.mjs'

const puzzles = [
  '95612 3 8' +
  '1   78469' +
  '         ' +
  '         ' +
  '         ' +
  '         ' +
  '         ' +
  '8479    2' +
  '69       ',
  '4    53  ' +
  ' 3 61    ' +
  ' 2    8  ' +
  '  64  5  ' +
  '9  1 7  3' +
  '  2  36  ' +
  '  5    2 ' +
  '    86 4 ' +
  '  12    8',
  ' 4      8' +
  ' 38915   ' +
  '9     1  ' +
  '2  8   7 ' +
  '5   3   1' +
  ' 7   2  3' +
  '  7     5' +
  '   52461 ' +
  '1      2 ',
  '    9 8  ' +
  ' 3    4  ' +
  '9    25 1' +
  '   17   6' +
  ' 1 8 4 9 ' +
  '2   35   ' +
  '1 82    3' +
  '  2    5 ' +
  '  9 1    ',
  ' 3     1 ' +
  ' 7 6    5' +
  ' 84  16  ' +
  '    237 4' +
  '    1    ' +
  '9 754    ' +
  '  82  97 ' +
  '5    4 6 ' +
  ' 1     4 ',
  '  3   9  ' +
  '57   1   ' +
  '    2  76' +
  ' 3 9   5 ' +
  '1  538  7' +
  ' 8   7 6 ' +
  '79  8    ' +
  '   4   21' +
  '  6   3  ',
  ' 7 4   92' +
  '    8   5' +
  '  3   7  ' +
  '       8 ' +
  '  7 1 5 4' +
  '   237   ' +
  '2 4  5  3' +
  '         ' +
  '8 5   1  ',
  '    56 12' +
  ' 3      4' +
  '2 1      ' +
  '6  9  8  ' +
  '8     6 3' +
  ' 53     1' +
  ' 4  17   ' +
  '7 6  8   ' +
  '     3   ',
  '1  6   4 ' +
  '5     7  ' +
  '6 7    3 ' +
  '    95   ' +
  '  23    1' +
  '   42    ' +
  ' 7  5   2' +
  ' 6   3 15' +
  '  4  6   ',
  '68      3' +
  '7     8  ' +
  '     5  7' +
  '   7 6   ' +
  '3 58    2' +
  '      4 1' +
  '93   4   ' +
  '    31 4 ' +
  ' 2 6  1  ',
  '4 5  9 6 ' +
  '      43 ' +
  ' 2  67 18' +
  ' 145     ' +
  '  8     7' +
  ' 9    1 6' +
  ' 43      ' +
  '   9     ' +
  '   1 23  ',
  '     6   ' +
  '    5 9 1' +
  '  97   2 ' +
  '9  62 5 7' +
  ' 2  8  9 ' +
  '3 64  2  ' +
  '  1  8  4' +
  '4        ' +
  '   1   3 ',
  '4  731   ' +
  ' 56 9    ' +
  '         ' +
  '  3      ' +
  '7     92 ' +
  '2     4 1' +
  '     9  7' +
  '18 6   9 ' +
  '   4 265 ',
  '    7  6 ' +
  '789 6    ' +
  '      1  ' +
  '5    2  8' +
  '3   87  5' +
  '4    5  3' +
  '   3  7  ' +
  ' 5     46' +
  '    1  8 ',
  '   9   2 ' +
  '  3   79 ' +
  '8    65  ' +
  '67   3   ' +
  '  1   8  ' +
  '   154  3' +
  '7   4    ' +
  '    79  1' +
  '3 8  2   ',
  '    7 1  ' +
  ' 8  94 72' +
  '        5' +
  '95    8 4' +
  '42  8    ' +
  '    1  9 ' +
  ' 6 7     ' +
  '     1 6 ' +
  '    28957',
  '9      84' +
  '1     7 5' +
  '  4 65   ' +
  '   1     ' +
  '     6  2' +
  ' 3 2   5 ' +
  ' 4   1 9 ' +
  '  372    ' +
  ' 2     4 ',
  '91       ' +
  '  4  6  9' +
  '  67 8   ' +
  '         ' +
  '  8  526 ' +
  ' 2 3     ' +
  '    4192 ' +
  '2       3' +
  '  98   46',
]


console.time(`total time`)
puzzles.forEach((puzzle, i) => {
  console.time(`iteration ${i}`)
  solve(puzzle)
  console.timeEnd(`iteration ${i}`)
})
console.log('---------------------')
console.timeEnd(`total time`)
