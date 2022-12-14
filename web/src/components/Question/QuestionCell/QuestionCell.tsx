import type { FindQuestionById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Question } from 'src/components/Question/Question'

// TODO: Write Tests

export const QUERY = gql`
  query FindQuestionById($id: Int!) {
    question: question(id: $id) {
      id
      question
      answer
      pinned
      countLikes
      currentUserLikes
      currentUserBookmarked
      askedBy {
        id
        avatar
        avatarColor
        fullName
        username
      }
      answeredBy {
        id
        avatar
        avatarColor
        fullName
        username
      }
      askedOn
      updatedOn
      parentQuestionId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Question not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ question }: CellSuccessProps<FindQuestionById>) => {
  return <Question questionId={question.id} {...question} />
}
