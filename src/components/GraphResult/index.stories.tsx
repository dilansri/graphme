import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GraphResult } from '.'
import { buildGraph } from '../../graph/utils'

export default {
  title: 'GraphResult',
  component: GraphResult ,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof GraphResult >

const Template: ComponentStory<typeof GraphResult > = (args) => <GraphResult {...args}  />

export const Empty = Template.bind({})


Empty.args = {
  ...buildGraph('')
}


export const ValidGraph = Template.bind({})

ValidGraph.args = {
  ...buildGraph('a-b-c')
}


export const InvalidGraph = Template.bind({})

InvalidGraph.args = {
  ...buildGraph('ab--')
}

