import { RecentItem, IRecentItem } from './RecentItem'
import { RecentItem as RecentItemData } from './RecentItem.mocks'

const Template = (args: IRecentItem) => <RecentItem {...args} />

export const Default = Template.bind({})
Default.args = { ...RecentItemData }

export const NoAvatar = Template.bind({})
NoAvatar.args = {
  username: 'selfteachme',
  firstName: 'Amy',
  lastName: 'Dutton',
  question: 'How did you and James meet?',
  questionId: 1,
}

export default {
  title: 'Components/Recent Item',
  component: RecentItem,
  argTypes: {
    avatar: {
      name: 'avatar',
      type: { name: 'string', required: false },
      description: "string for an image representing user's avatar",
      defaultValue: '',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    username: {
      name: 'username',
      type: { name: 'string', required: true },
      description: "user's username",
      defaultValue: 'null',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    firstName: {
      name: 'firstName',
      type: { name: 'string', required: true },
      description: "user's first name",
      defaultValue: 'null',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    lastName: {
      name: 'lastName',
      type: { name: 'string', required: true },
      description: "user's last name",
      defaultValue: 'null',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    question: {
      name: 'question',
      type: { name: 'string', required: true },
      description: 'string containing the question',
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
