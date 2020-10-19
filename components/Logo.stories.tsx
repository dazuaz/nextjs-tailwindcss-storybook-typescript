import Logo from "./Logo"

export default {
  title: "Brand/Logo",
  component: Logo,
}

const Template = (args) => <Logo {...args} />

export const Primary = Template.bind({})

export const Secondary = Template.bind({})

Secondary.args = {
  itHovers: true,
}
