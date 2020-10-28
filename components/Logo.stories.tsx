import { Logo, LogoProps } from "components/Logo"
import { Story, Meta } from "@storybook/react/types-6-0"

export default {
  title: "Brand/Logo",
  component: Logo,
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Primary = Template.bind({})

Primary.args = {
  itHovers: false,
}
export const Secondary = Template.bind({})

Secondary.args = {
  itHovers: true,
}
