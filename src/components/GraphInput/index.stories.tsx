import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GraphInput } from '.'

export default {
  title: 'GraphInput',
  component: GraphInput ,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof GraphInput >

const Template: ComponentStory<typeof GraphInput > = (args) => <GraphInput {...args}  />

export const Empty = Template.bind({})

const noop = () => {}

Empty.args = {
  input: '',
  onChange: noop
}


export const WithInput = Template.bind({})

WithInput.args = {
  input: 'a-b-c',
  onChange: noop
}
