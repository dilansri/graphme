
import { buildGraph } from '../utils'
import { isRedBlueColorable } from './isRedBlueColorable'

it.each([
  // two connected vertices
  ['a - b', true], 
  // three connected vertices
  ['a - b, b - c', true],
  // three edges, one unconnected
  ['a - b, b - c, d - e', false],
  // all connected, but not red-blue colorable
  ['a - b - c - a ', false]
])(`check if the %s graph is red-blue colorable`, (input, isRedBlueColorableGraph,) => {
  const {graph} = buildGraph(input)
  const result = isRedBlueColorable(graph)
  
  expect(result).toEqual(isRedBlueColorableGraph)
})


