import { Button, ButtonProps } from "components/Button"
import { Story, Meta } from "@storybook/react/types-6-0"

export default {
  title: "Brand/Button",
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Default Button</Button>
)

export const Primary = Template.bind({})

Primary.args = {
  href: "/",
}

export const Variant = Template.bind({})

Variant.args = {
  href: "#",
  isVarian: true,
}
