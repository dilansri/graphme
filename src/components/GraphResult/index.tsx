import React, { FunctionComponent, useMemo } from 'react'
import { Graph } from '../../graph/Graph'
import { Operations } from '../../graph'

interface GraphResultProps {
  graph: Graph<string>
  isInvalidGraph: boolean
}

export const GraphResult: FunctionComponent<GraphResultProps> = ({ graph, isInvalidGraph }) => {

  const isConnected = useMemo(() => Operations.isConnected(graph), [graph])
  const isRedBlueColorable = useMemo(() => Operations.isRedBlueColorable(graph), [graph])

  return (
    <div data-testid="graph_result-container">
      <h3>Result:</h3>
      {isInvalidGraph && <h2 data-testid="graph_result-error">Invalid graph</h2>}
      {!isInvalidGraph && 
        <div data-testid="graph_result-success">
          <p>Connected: {`${isConnected}`}</p>
          <p>red-blue colorable: {`${isRedBlueColorable}`}</p>
          <p>Transformed graph</p>
          <code>{graph.toString()}</code>
        </div>
      }
    </div>
  )
}