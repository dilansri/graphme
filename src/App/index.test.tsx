import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { App } from '.'

it('renders the GraphMe components', () => {
  render(<App />)

  const appRoot = screen.getByTestId('app_root')
  const inputContainer = screen.getByTestId('graph_input-container')
  const resultContainer = screen.getByTestId('graph_result-container')

  expect(appRoot).toBeInTheDocument()
  expect(inputContainer).toBeInTheDocument()
  expect(resultContainer).toBeInTheDocument()
})


it('shows the error for an invalid graph input', () => {

  const invalidInput = 'acd--'
  render(<App />)
  const textArea = screen.getByTestId('graph_input-textarea')

  fireEvent.change(textArea, {target: {value: invalidInput}})
  
  const resultError = screen.getByTestId('graph_result-error')
  expect(resultError).toBeInTheDocument()

})

it('shows the result for an valid graph input', () => {

  const invalidInput = 'a-b-c-d'
  render(<App />)
  const textArea = screen.getByTestId('graph_input-textarea')

  fireEvent.change(textArea, {target: {value: invalidInput}})

  const resultSuccess = screen.getByTestId('graph_result-success')
  expect(resultSuccess).toBeInTheDocument()


})
