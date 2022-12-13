import { DropdownMenu, IDropdownMenu } from './DropdownMenu'
import { DropdownMenuOptions } from './DropdownMenu.mocks'

export const generated = () => {
  return (
    <DropdownMenu
      isShowing={true}
      options={[
        { label: 'Follow', icon: { name: 'follow' } },
        { label: 'Mute', icon: { name: 'mute' } },
        { label: 'Unfollow', icon: { name: 'unfollow' } },
      ]}
      className="top left"
      onClickOutside={() => {}}
    />
  )
}

const Template = (args: IDropdownMenu) => <DropdownMenu {...args} />

export const LeftTop = Template.bind({})
LeftTop.args = {
  className: 'left top',
  isShowing: true,
  options: DropdownMenuOptions,
}

export const CenterTop = Template.bind({})
CenterTop.args = {
  className: 'center top',
  isShowing: true,
  options: DropdownMenuOptions,
}

export const RightTop = Template.bind({})
RightTop.args = {
  className: 'right top',
  isShowing: true,
  options: DropdownMenuOptions,
}

export const LeftBottom = Template.bind({})
LeftBottom.args = {
  className: 'left bottom',
  isShowing: true,
  options: DropdownMenuOptions,
}

export const CenterBottom = Template.bind({})
CenterBottom.args = {
  className: 'center bottom',
  isShowing: true,
  options: DropdownMenuOptions,
}

export const RightBottom = Template.bind({})
RightBottom.args = {
  className: 'right bottom',
  isShowing: true,
  options: DropdownMenuOptions,
}
export default { title: 'Components/DropdownMenu' }
