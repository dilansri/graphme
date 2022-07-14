import React, { ChangeEventHandler, FunctionComponent } from 'react'

import './index.css'
interface GraphInputProps {
  input: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}
export const GraphInput: FunctionComponent<GraphInputProps> = ({ input, onChange }) => {
  return (
    <div className="Input-container" data-testid="graph_input-container">
      <h2>Enter your graph below:</h2>
      <textarea data-testid="graph_input-textarea" rows={10} cols={60} value={input} onChange={onChange}></textarea>
      <code className='instructions'>
        <p>Valid input formats:</p>
        <p><b>Complete graph with `-` connecting vertices:</b></p>
        <p>a-b-c-d-e</p>
        <p><b>Edges seperated by commas:</b></p>
        <p>a-b, b-c, c-d</p>
        <p><b>Edges seperated by new lines:</b></p>
        <p>a-b<br/> b-c<br /> c-d</p>
        <p><b>Edges seperated by both new lines and commas:</b></p>
        <p> a-b<br/> b-c,c-d</p>
      </code>
    </div>
  )
}