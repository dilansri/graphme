import { Graph } from '../Graph'
import { pairs } from './pairs'

const [VERTEX_DELIMITER, PATH_DELIMITER] = ['-', ',']
const [SPACE_REGEX, NEW_LINE_REGEX] = [/\s/g, /\n/g]



export const buildGraph = (input: string) : { graph: Graph<string>, isInvalidGraph: boolean } => {

  let isInvalidGraph = false

  // sanitizing graph to be on the expected format
  // removing white-spaces and replacing new lines with `,`
  const sanitizedInput = input.replace(NEW_LINE_REGEX, PATH_DELIMITER).replace(SPACE_REGEX, '')

  // removing extra `''` if occured with filter(Boolean)
  const paths = sanitizedInput.split(PATH_DELIMITER).filter(Boolean)

  const graph = new Graph<string>()


  for(const path of paths) {
    const edges = pairs(path.split(VERTEX_DELIMITER))

    for(const [leftVertex, rightVertex] of edges) {
      
      if(leftVertex == null || leftVertex === '') isInvalidGraph = true
      if(rightVertex == null || rightVertex === '') isInvalidGraph = true

      if(!isInvalidGraph) {
        graph.addEdge(leftVertex, rightVertex )
      }

    }

  }

  return { graph, isInvalidGraph }
}