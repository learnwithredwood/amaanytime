import { Link, routes } from '@redwoodjs/router'

import type { AvatarColor } from 'src/components/Avatar/Avatar'

import { Avatar } from '../../Avatar'

export interface IRecentItem {
  avatar?: string
  avatarColor?: AvatarColor
  fullName: string
  question: string
  questionId: string
  username: string
}

const RecentItem = ({
  avatar = '',
  avatarColor,
  fullName,
  question,
  questionId,
  username,
}: IRecentItem): JSX.Element => {
  return (
    <div>
      <div className="mb-1 font-sans text-base font-bold leading-5">
        <Link
          to={routes.question({ id: Number(questionId) })}
          className="hover:text-punch hover:underline"
        >
          {question}
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link to={routes.profile({ username: username })}>
          <Avatar
            alt={fullName}
            avatarColor={avatarColor}
            src={avatar}
            width={32}
            height={32}
          />
        </Link>
        <div className="text-sm">
          Answered by{' '}
          <Link
            className="hover:underline"
            to={routes.profile({ username: username })}
          >
            {fullName}
          </Link>
        </div>
      </div>
    </div>
  )
}

export { RecentItem }
