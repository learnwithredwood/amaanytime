import { Avatar, IAvatar } from './Avatar'

const Template = (args: IAvatar) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  alt: 'Amy Dutton',
  src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
}

export const NoImage = Template.bind({})
NoImage.args = {
  alt: 'Amy Dutton',
}

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    alt: {
      name: 'alt',
      type: { name: 'string', required: true },
      description: 'alt text',
      defaultValue: 'null',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    src: {
      name: 'src',
      type: { name: 'string', required: false },
      description: 'image source path',
      defaultValue: '',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    className: {
      name: 'className',
      type: { name: 'string', required: false },
      description: 'CSS classes',
      defaultValue: 'null',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    height: {
      name: 'height',
      type: { name: 'number', required: false },
      description: 'avatar height in pixels',
      defaultValue: 32,
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 32 },
      },
    },
    width: {
      name: 'width',
      type: { name: 'number', required: false },
      description: 'avatar width in pixels',
      defaultValue: 32,
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 32 },
      },
    },
  },
}
