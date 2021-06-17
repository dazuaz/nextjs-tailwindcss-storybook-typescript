import { Github } from './Github'
import type { GithubProps } from './Github'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Misc/Github',
  component: Github,
} as Meta

const Template: Story<GithubProps> = (args) => <Github {...args} />

export const Primary: Story<GithubProps> = Template.bind({})
