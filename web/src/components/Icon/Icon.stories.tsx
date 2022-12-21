import { Icon, IIcon } from './Icon'

const Template = (args: IIcon) => <Icon {...args} />

export const Arrow = Template.bind({})
Arrow.args = {
  name: 'Arrow',
}

export const Bell = Template.bind({})
Bell.args = {
  name: 'Bell',
}

export const Block = Template.bind({})
Block.args = {
  name: 'Block',
}

export const Bookmark = Template.bind({})
Bookmark.args = {
  name: 'Bookmark',
}

export const BookmarkFilled = Template.bind({})
BookmarkFilled.args = {
  name: 'BookmarkFilled',
}

export const Check = Template.bind({})
Check.args = {
  name: 'Check',
}

export const ChevronDown = Template.bind({})
ChevronDown.args = {
  name: 'ChevronDown',
}

export const ChevronLeft = Template.bind({})
ChevronLeft.args = {
  name: 'ChevronLeft',
}

export const ChevronRight = Template.bind({})
ChevronRight.args = {
  name: 'ChevronRight',
}

export const ChevronUp = Template.bind({})
ChevronUp.args = {
  name: 'ChevronUp',
}

export const Close = Template.bind({})
Close.args = {
  name: 'Close',
}

export const Comment = Template.bind({})
Comment.args = {
  name: 'Comment',
}

export const CommentFilled = Template.bind({})
CommentFilled.args = {
  name: 'CommentFilled',
}

export const Delete = Template.bind({})
Delete.args = {
  name: 'Delete',
}

export const Dots = Template.bind({})
Dots.args = {
  name: 'Dots',
}

export const Edit = Template.bind({})
Edit.args = {
  name: 'Edit',
}

export const Flag = Template.bind({})
Flag.args = {
  name: 'Flag',
}

export const Follow = Template.bind({})
Follow.args = {
  name: 'Follow',
}

export const Heart = Template.bind({})
Heart.args = {
  name: 'Heart',
}

export const HeartFilled = Template.bind({})
HeartFilled.args = {
  name: 'HeartFilled',
}

export const Hide = Template.bind({})
Hide.args = {
  name: 'Hide',
}

export const Link = Template.bind({})
Link.args = {
  name: 'Link',
}

export const Logout = Template.bind({})
Logout.args = {
  name: 'Logout',
}

export const Map = Template.bind({})
Map.args = {
  name: 'Map',
}

export const Mute = Template.bind({})
Mute.args = {
  name: 'Mute',
}

export const Pin = Template.bind({})
Pin.args = {
  name: 'Pin',
}

export const Reuse = Template.bind({})
Reuse.args = {
  name: 'Reuse',
}

export const Settings = Template.bind({})
Settings.args = {
  name: 'Settings',
}

export const Share = Template.bind({})
Share.args = {
  name: 'Share',
}

export const Show = Template.bind({})
Show.args = {
  name: 'Show',
}

export const Unfollow = Template.bind({})
Unfollow.args = {
  name: 'Unfollow',
}

export const Unmute = Template.bind({})
Unmute.args = {
  name: 'Unmute',
}

export const VoteDown = Template.bind({})
VoteDown.args = {
  name: 'VoteDown',
}

export const VoteUp = Template.bind({})
VoteUp.args = {
  name: 'VoteUp',
}

const iconOptions = [
  'arrow',
  'bell',
  'block',
  'bookmark',
  'bookmarkFilled',
  'check',
  'chevronDown',
  'chevronLeft',
  'chevronRight',
  'chevronUp',
  'close',
  'comment',
  'commentFilled',
  'delete',
  'dots',
  'edit',
  'flag',
  'follow',
  'heart',
  'heartFilled',
  'hide',
  'link',
  'logout',
  'map',
  'mute',
  'pin',
  'reuse',
  'settings',
  'share',
  'show',
  'voteDown',
  'voteUp',
  'unfollow',
  'unmute',
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
