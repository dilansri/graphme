
import { buildGraph } from '../utils'
import { isConnected } from './isConnected'

it.each([
  // two connected vertices
  ['a - b', true], 
  // three connected vertices
  ['a - b, b - c', true],
  // three edges, one unconnected
  ['a - b, b - c, d - e', false]
])(`check if the %s graph is connected`, (input, isConnectedGraph,) => {
  const {graph} = buildGraph(input)
  const result = isConnected(graph)
  
  expect(result).toEqual(isConnectedGraph)
})


