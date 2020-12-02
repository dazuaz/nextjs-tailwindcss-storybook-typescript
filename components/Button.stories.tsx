import { Button } from "./Button"

import type { ButtonProps } from "./Button"
import type { Story, Meta } from "@storybook/react/types-6-0"

export default {
  title: "Brand/Button",
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Default Button</Button>

export const Primary: Story<ButtonProps> = Template.bind({})

export const Variant: Story<ButtonProps> = Template.bind({})

Variant.args = {
  isVariant: true,
}
