import { AskAgainButton, IAskAgainButton } from './AskAgainButton'

const Template = (args: IAskAgainButton) => <AskAgainButton {...args} />

export const UserAskedAgain = Template.bind({})
UserAskedAgain.args = {
  userAskedAgain: false,
  askAgainCount: 3,
}

export const UserDidNotAsk = Template.bind({})
UserDidNotAsk.args = {
  userAskedAgain: true,
  askAgainCount: 3,
}

export const NobodyAsked = Template.bind({})
NobodyAsked.args = {
  userAskedAgain: false,
  askAgainCount: 0,
}

export default { title: 'Components/AskAgainButton', component: AskAgainButton }
