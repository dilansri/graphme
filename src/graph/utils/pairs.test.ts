import { pairs } from './pairs'

it.each([
  [['a', 'b', 'c'], [['a', 'b'], ['b', 'c']]],
  [['a', 'b', 'c', 'd'], [['a', 'b'], ['b', 'c'], ['c', 'd']]],
])('outputs consecutive pairs of %s', (input, output) => {
  const result = pairs(input)

  expect(result).toEqual(output)
})