import { Byline } from './Byline'
import { PinnedQuestion as data } from '../../Question.mocks'

const Template = (args) => <Byline {...args} />

export const Default = Template.bind({})
Default.args = {
  person: data.answeredBy,
  displayDate: data.updatedOn,
}

export default {
  title: 'Components/Byline',
  component: Byline,
  argTypes: {
    person: {
      name: 'person',
      description: 'person object containing the fullName and userName',
      control: {
        type: 'object',
      },
      table: {
        type: { summary: 'object' },
      },
    },
    displayDate: {
      name: 'displayDate',
      description: 'date in Zulu time to display',
      control: {
        type: 'date',
      },
    },
  },
}
