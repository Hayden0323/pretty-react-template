import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Popover from './index'

export default {
  title: 'Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const TopPopover = Template.bind({})
TopPopover.args = {
  content: <p>123</p>,
  show: 'true',
  children: <p>456</p>,
  placement: 'left',
}
