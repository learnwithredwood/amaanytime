import { useRef, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'

import { Avatar } from '../Avatar'
import type { AvatarColor } from '../Avatar/Avatar'
import { DropdownMenu } from '../DropdownMenu'
import { Icon } from '../Icon'

export interface ILoggedInUser {
  avatar?: string
  avatarColor?: AvatarColor
  fullName: string
  username: string
}

const LoggedInUser = ({
  avatar,
  avatarColor,
  fullName,
  username,
}: ILoggedInUser): JSX.Element => {
  const [isDropdownShowing, setIsDropdownShowing] = useState<boolean>(false)
  const triggerRef = useRef()
  const { logOut } = useAuth()

  const toggleDropdown = (): void => {
    setIsDropdownShowing((prevValue) => !prevValue)
  }

  return (
    <div className="flex max-w-2xl gap-3 bg-loggedInUserAside bg-cover bg-no-repeat px-5 pb-3">
      <a href="/LoggedInUser">
        <Avatar
          avatarColor={avatarColor}
          src={avatar}
          alt={fullName}
          width={80}
          height={80}
          className="border-4 border-punch"
        />
      </a>
      <Link
        to={routes.me()}
        className="mt-auto flex-1 self-end pt-5 font-condensed text-3xl leading-none"
      >
        <div className="text-ulcaGold">{fullName}</div>
        <div className="text-white">@{username}</div>
      </Link>
      <div className="relative my-auto self-center pt-5 text-white hover:text-ulcaGold">
        {isDropdownShowing && (
          <DropdownMenu
            isShowing={true}
            onClickOutside={() => toggleDropdown()}
            options={[
              {
                label: 'Settings',
                icon: { name: 'settings' },
                action: () => navigate(routes.settings()),
              },
              { label: 'Logout', icon: { name: 'logout' }, action: logOut },
            ]}
            className="absolute -right-2 bottom-9"
            direction="bottom right"
            triggerRef={triggerRef}
          />
        )}
        <button
          onClick={() => toggleDropdown()}
          className={`${isDropdownShowing && `text-punch`}`}
          ref={triggerRef}
        >
          <Icon name="dots" />
        </button>
      </div>
    </div>
  )
}

export { LoggedInUser }
