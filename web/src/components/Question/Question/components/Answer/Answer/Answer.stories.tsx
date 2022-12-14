import { Answer, IAnswer } from './Answer'
import { PinnedQuestion as data } from '../../../Question.mocks'

const Template = (args: IAnswer) => <Answer {...args} />

export const Primary = Template.bind({})
Primary.args = { ...data }

export default { title: 'Components/Answer', component: Answer }
