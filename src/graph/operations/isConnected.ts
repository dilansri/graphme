import { Graph } from "../Graph"

/**
 * Visits the graph in depth first order
 */
class ConnectedDFS {
  private visited: Array<boolean>

  private graph: Graph<string>

  constructor(graph: Graph<string>) {
    this.graph = graph
    this.visited = Array.from({length: graph.V()}, () => false)
  }

  public dfs(vertex: number) {
    this.visited[vertex] = true

    for(const neighbour of this.graph.neighbours(vertex)) {
      if(!this.visited[neighbour]) {
        this.dfs(neighbour)
      }
    }
  }

  public getVisitedCount(): number {
    return this.visited.filter(Boolean).length
  }
}


export const isConnected = (graph: Graph<string>): boolean => {

  if(graph.V() < 2) return false

  const connectedDFS = new ConnectedDFS(graph)

  connectedDFS.dfs(0)

  return connectedDFS.getVisitedCount() === graph.V()
}