import type { AvatarColor } from 'src/components/Avatar/Avatar'
import { Link, routes } from '@redwoodjs/router'
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
      <div className="font-bold text-base font-sans leading-5 mb-1">
        <Link
          to={routes.question({ id: Number(questionId) })}
          className="hover:underline hover:text-punch"
        >
          {question}
        </Link>
      </div>
      <div className="flex gap-2 items-center">
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
