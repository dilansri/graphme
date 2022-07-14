
import { buildGraph } from './buildGraph'

it.each([
  // 1 egde, 2 vertices graph
  ['a - b', '0: [1], 1: [0]', 2], 
  // 2 edges, 3 vertices graph
  ['a - b, b - c', '0: [1], 1: [0,2], 2: [1]', 3],
  // cyclic graph
  ['a - b, b - c, c - a', '0: [1,2], 1: [0,2], 2: [1,0]', 3],
  // cyclic graph with new lines
  [`a - b
    b - c
    c - a`, '0: [1,2], 1: [0,2], 2: [1,0]', 3]
])(`output correct result for graph %s`, (input, output, verticesCount) => {
  const {graph} = buildGraph(input)
  
  // assert graph format
  expect(graph.toString()).toEqual(output)

  //assert vertices count
  expect(graph.V()).toEqual(verticesCount)
})


