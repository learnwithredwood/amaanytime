import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Question } from '../Question/Question'
import type { FindQuestionsWithoutAnswers } from 'types/graphql'

export const QUERY = gql`
  query FindQuestionsWithoutAnswers(
    $answeredByUsername: String
    $askedByUsername: String
  ) {
    questionsWithoutAnswers(
      answeredByUsername: $answeredByUsername
      askedByUsername: $askedByUsername
    ) {
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

export const Empty = () => {
  return <div className="rw-text-center">{'No questions yet. '}</div>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  questionsWithoutAnswers,
}: CellSuccessProps<FindQuestionsWithoutAnswers>) => {
  return questionsWithoutAnswers.map((question, index) => (
    <Question
      data-testid="questionWrapper"
      questionId={question.id}
      key={index}
      {...question}
    />
  ))
}
