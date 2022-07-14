import { NumericSymbolTable } from "./NumericSymbolTable"

/**
 * Graph data structure implemented with adjacency list.
 * Supports creating numeric and string based graphs
 * Has a dependency to NumericSymbolTable to use incrementing integers for vertices lables
 * 
 * @summary Graph data structure for numbers and strings
 */
export class Graph<VertexType extends string | number> {
  private adjList : Map<number, Set<number>>
  private symbolTable : NumericSymbolTable<VertexType>

  constructor() {
    this.adjList = new Map<number, Set<number>>()
    this.symbolTable = new NumericSymbolTable<VertexType>()
  }

  /**
   * Adding an edge between two vertices
   * @param v left vertex
   * @param w right vertex
   */
  public addEdge(v: VertexType, w: VertexType) {

    // turning the vertices into numeric values
    const [leftNumericVertex, rightNumericVertex] = [this.symbolTable.get(v), this.symbolTable.get(w)]

    if(!this.adjList.get(leftNumericVertex)) {
      this.adjList.set(leftNumericVertex, new Set([]))
    }

    if(!this.adjList.get(rightNumericVertex)) {
      this.adjList.set(rightNumericVertex, new Set([]))
    }

    this.adjList.get(leftNumericVertex)!.add(rightNumericVertex)
    this.adjList.get(rightNumericVertex)!.add(leftNumericVertex)

  }

  /**
   * Provides the neighbours of the given vertex
   * @param vertex 
   * @returns list of neighbours
   */
  public neighbours(vertex: number) : Set<number> {
    const neighbours = this.adjList.get(vertex) || new Set<number>()
    return neighbours
  }

  /**
   * 
   * @returns number of vertices
   */
  public V(): number {
    return this.adjList.size
  }

  /**
   * Generates a human readable representation of the graph
   * @returns stringified graph
   */
  public toString(): string {
    let list : Array<string> = []

    this.adjList.forEach((v, k) => {
      list.push(`${k}: [${Array.from(v.values()).toString()}]`)
    })

    return list.join(', ')
  }
  
}