import { Link, routes } from '@redwoodjs/router'
import { formatRelativeDate } from 'src/utils/DateHelpers'
import type { IUser } from '../../Question.d'

interface IByline {
  person: IUser
  displayDate: string
}

const Byline = ({ person, displayDate }: IByline) => {
  return (
    <p data-testid="byline">
      <Link
        to={routes.profile({ username: person.username })}
        className="hover:underline hover:text-punch"
      >
        <strong>{person.fullName}</strong> @{person.username}
      </Link>
      {displayDate && ` • ${formatRelativeDate(displayDate)}`}
    </p>
  )
}

export { Byline }
