import { Graph } from "../Graph"

/**
 * Identifying if the graph is red-blue colorable using the depth first search
 * colors array represents the given colors for each vertex. 1 or red, -1 for blue
 * (Could also use an array of booleans to represent this binary information)
 */
class RedBlueColorableDFS {
  private colors: Array<number|null>

  private graph: Graph<string>

  constructor(graph: Graph<string>) {
    this.graph = graph
    this.colors = Array.from({ length: graph.V() }, () => null)

    // assigning red (1) to the first vertex
    this.colors[0] = 1
  }

  public dfs(vertex: number, nextColor: number): boolean {
    
    const currentVertexColor = this.colors[vertex]!

    if(currentVertexColor === nextColor) return false

    for(const neighbour of this.graph.neighbours(vertex)) {
      if(this.colors[neighbour] === null) {
        this.colors[neighbour] = nextColor

        // assigning the opposite color to the nieghbour
        return this.dfs(neighbour, -nextColor)
      }else if(this.colors[neighbour] === this.colors[vertex]){
        return false
      }
    }

    return true
  }

  public getVisitedCount(): number {
    return this.colors.filter(Boolean).length
  }
}


export const isRedBlueColorable = (graph: Graph<string>): boolean => {

  const connectedDFS = new RedBlueColorableDFS(graph)

  // starting the depth first search from 0 vertex and setting the next color to be blue (-1)
  const isRedBlueColorable = connectedDFS.dfs(0, -1)

  const isConnected = graph.V() === connectedDFS.getVisitedCount()

  return isRedBlueColorable && isConnected

}