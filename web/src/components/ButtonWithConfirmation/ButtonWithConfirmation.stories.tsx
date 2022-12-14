import {
  ButtonWithConfirmation,
  IButtonWithConfirmation,
} from './ButtonWithConfirmation'

const Template = (args: IButtonWithConfirmation) => (
  <ButtonWithConfirmation {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
}

export default {
  title: 'Components/ButtonWithConfirmation',
  component: ButtonWithConfirmation,
}
