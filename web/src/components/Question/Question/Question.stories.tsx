import { Question, IQuestion } from './Question'
import {
  PinnedQuestion as PinnedQuestionData,
  // QuestionOrder as QuestionOrderData,
  QuestionNoActions as QuestionNoActionsData,
} from './Question.mocks'

const Template = (args: IQuestion): JSX.Element => <Question {...args} />

export const PinnedQuestion = Template.bind({})
PinnedQuestion.args = { ...PinnedQuestionData }

export const QuestionNoActions = Template.bind({})
QuestionNoActions.args = { ...QuestionNoActionsData }

// export const

// TODO: Update arg types
export default {
  title: 'Components/Question',
  component: Question,
  argTypes: {
    answer: {
      name: 'answer',
      type: { name: 'string', required: true },
      description: 'string containing the answer, formatted with Markdown',
      defaultValue: 'null',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    askAgain: {
      name: 'askAgain',
      type: { name: 'number', required: false },
      description:
        'Number of times that someone has asked this question to someone else',
      defaultValue: 'null',
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'null' },
      },
    },
    askedByName: {
      name: 'askedByName',
      type: { name: 'string', required: true },
      description: 'Name of the person that asked the question',
      defaultValue: 'null',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
  },
}
