import { Logo, LogoProps } from "./Logo"
import { Story, Meta } from "@storybook/react/types-6-0"
// TODO: storybook does not support next/image yet
export default {
  title: "Brand/Logo",
  component: Logo,
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Primary: Story<LogoProps> = Template.bind({})
// workarround of prefetch Link error
Primary.args = {
  href: "/",
  prefetch: false,
}
