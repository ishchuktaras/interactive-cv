import type { Meta, StoryObj } from '@storybook/react'
import CV from './cv'

const meta: Meta<typeof CV> = {
  title: 'Components/CV',
  component: CV,
}

export default meta
type Story = StoryObj<typeof CV>

export const Default: Story = {}