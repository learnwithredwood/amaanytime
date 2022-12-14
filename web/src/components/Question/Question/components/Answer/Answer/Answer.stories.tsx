import { PinnedQuestion as data } from '../../../Question.mocks'

import { Answer, IAnswer } from './Answer'

const Template = (args: IAnswer) => <Answer {...args} />

export const Primary = Template.bind({})
Primary.args = { ...data }

export default { title: 'Components/Answer', component: Answer }
