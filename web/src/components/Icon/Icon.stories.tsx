import { Icon, IIcon } from './Icon'

const Template = (args: IIcon) => <Icon {...args} />

export const Bookmark = Template.bind({})
Bookmark.args = {
  name: 'Bookmark',
}

export const BookmarkFilled = Template.bind({})
BookmarkFilled.args = {
  name: 'BookmarkFilled',
}

export const Comment = Template.bind({})
Comment.args = {
  name: 'Comment',
}

export const CommentFilled = Template.bind({})
CommentFilled.args = {
  name: 'CommentFilled',
}

export const Heart = Template.bind({})
Heart.args = {
  name: 'Heart',
}

export const HeartFilled = Template.bind({})
HeartFilled.args = {
  name: 'HeartFilled',
}

export const Reuse = Template.bind({})
Reuse.args = {
  name: 'Reuse',
}

export const Share = Template.bind({})
Share.args = {
  name: 'Share',
}

const iconOptions = [
  'bookmark',
  'bookmarkFilled',
  'comment',
  'commentFilled',
  'heart',
  'heartFilled',
  'reuse',
  'share',
]

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      name: 'name',
      description: 'name of the icon',
      control: {
        type: 'select',
        options: iconOptions,
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    className: {
      name: 'className',
      type: { name: 'string', required: true },
      defaultValue: '',
      description: 'CSS class names',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string', defaultValue: { summary: '' } },
      },
    },
    height: {
      name: 'height',
      type: { name: 'number', required: false },
      description: 'avatar height in pixels',
      defaultValue: 24,
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 24 },
      },
    },
    width: {
      name: 'width',
      type: { name: 'number', required: false },
      description: 'avatar width in pixels',
      defaultValue: 24,
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 24 },
      },
    },
  },
}
