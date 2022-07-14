import React, { ChangeEventHandler, useState, useMemo } from 'react';
import { GraphInput } from '../components/GraphInput'
import { GraphResult } from '../components/GraphResult'
import { Utils } from '../graph'

import './index.css'

export const App : React.FunctionComponent= () => {

  const [graphInputText, setGraphInputText] = useState('')

  const {graph, isInvalidGraph} = useMemo(() => Utils.buildGraph(graphInputText), [graphInputText])

  

  const handleGraphInputTextChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setGraphInputText(event.target.value)
  }

  return (
    <div className="App" data-testid="app_root">
      <div>
        <h1>GraphMe</h1>
      </div>

      <GraphInput input={graphInputText} onChange={handleGraphInputTextChange} />

      <GraphResult graph={graph} isInvalidGraph={isInvalidGraph} />
    </div>
  );
}

