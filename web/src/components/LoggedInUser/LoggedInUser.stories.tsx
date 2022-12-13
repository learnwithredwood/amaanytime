import { LoggedInUser, ILoggedInUser } from './LoggedInUser'

const Template = (args: ILoggedInUser) => <LoggedInUser {...args} />

export const Default = Template.bind({})
Default.args = {
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  firstName: 'Amy',
  lastName: 'Dutton',
  username: 'selfteachme',
}

export default {
  title: 'Components/LoggedInUser',
  component: LoggedInUser,
  argTypes: {
    avatar: {
      name: 'avatar',
      type: { name: 'string', required: true },
      description: 'file path',
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
    username: {
      name: 'username',
      type: { name: 'string', required: true },
      description: "user's screen name",
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
