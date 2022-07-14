import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { App } from '.'

export default {
  title: 'App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = (args) => <App  />

export const MainApp = Template.bind({})
