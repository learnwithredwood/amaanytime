import { Avatar } from 'src/components/Avatar'
import type { IUser } from '../../../Question.d'
import { Byline } from '../../Byline'

export interface IAnswer {
  answer: string
  answeredBy: IUser
  updatedOn: string
}

const Answer = ({ answer, answeredBy, updatedOn }: IAnswer) => {
  return (
    <div className="large-body mb-8 relative" data-testid="answer">
      <Avatar
        className="absolute -left-20 -top-3 z-avatar"
        src={answeredBy.avatar}
        alt={answeredBy.username}
        avatarColor={answeredBy.avatarColor}
        height={48}
        width={48}
      />
      <Byline person={answeredBy} displayDate={updatedOn} />
      {answer}
    </div>
  )
}

export { Answer }
