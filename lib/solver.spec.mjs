import assert from 'assert'
import { solve } from './solver.mjs'

const noSolution = '516849732' +
'3 76 5   ' +
'8 97   65' +
'135 6 9 7' +
'472591  6' +
'96837  5 ' +
'253186 74' +
'6842 75  ' +
'791 5 6 8'

export function works_for_a_board_with_one_solution() {
  const results = solve('95612 3 8' +
    '123578469' +
    '478369125' +
    '214635897' +
    '         ' +
    '3        ' +
    '531287946' +
    '847916532' +
    '692453781')
  const solution = '956124378' +
    '123578469' +
    '478369125' +
    '214635897' +
    '769841253' +
    '385792614' +
    '531287946' +
    '847916532' +
    '692453781'
  assert.equal(results.length, 1, 'returns only one result')
  assert.deepEqual(results[0], solution, 'and the result is correct')
}

export function can_handle_a_board_with_two_solutions() {
  const results = solve('95612 3 8' +
  '123578469' +
  '478369125' +
  '214635897' +
  '         ' +
  '         ' +
  '531287946' +
  '847916532' +
  '692453781')
  assert.equal(results.length, 2, 'two solutions are returned')
  assert.deepEqual(results[0], '956124378123578469478369125214635897769841253385792614531287946847916532692453781', 'the first result is correct')
  // TODO: this is wrong! The two solutions are equal
  assert.deepEqual(results[0], '956124378123578469478369125214635897769841253385792614531287946847916532692453781', 'the second result is correct')
}

const sixSolution =  '95612 3 8' +
'123578469' +
'478369125' +
'214635897' +
'         ' +
'         ' +
'531   946' +
'847916532' +
'692453781'

const lotsSolution =  '95612 3 8' +
'1   78469' +
'         ' +
'         ' +
'         ' +
'         ' +
'         ' +
'8479    2' +
'69       '

export function works_for_a_solved_solution() {
  const solvedSolution = '956124378132578469784693521579862143468319257321457896215786934847935612693241785'
  const results = solve(solvedSolution)
  assert.ok(Array.isArray(results), 'results is an array')
  assert.equal(results.length, 1, 'results array has only one element')
  assert.deepEqual(results[0], solvedSolution, 'the solution is the same as the input')
}